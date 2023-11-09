import { useState, useEffect, useReducer } from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import StatusBarPlaceholder from './StatusBarPlaceholder';
import { loadTasks, fetchTasks, fetchLists, loadAll } from './data/data';
import { ListSelector, SubListNav, TaskView } from './home/components';
import { storeTasks, clearAll } from './data/savedata';

function HomeScreen({ navigation }) {
    // Fetch active appearance theme
    const { colors } = useTheme();

    // Whether tasks have been loaded from storage
    const [hasLoadedTask, setHasLoadedTask] = useState(false);

    useEffect(() => {
        loadAll().then(() => {setHasLoadedTask(true)});
    }, [{}]);

    // Call forceUpdate() to forcibly update component
    // Is attached to page focus event listener:
    // Displayed tasks update to contain new tasks as added outside of this component in modal
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    // List data stored in state
    // Not sure this is entirely necessary at the moment
    // Will be used once adding & removing lists is implemented
    const [ lists, setLists ] = useState({});

    // Selected subcategory
    const [ selectedTab, setSelectedTab ] = useState(0);

    // Selected list
    // MAKE THIS SELECT FIRST LIST
    const [ value, setValue ] = useState("uni"); // default list to open

    // Task storage as transformed to state
    // So that components update automatically as this is changed
    const [ tasks, setTasks ] = useState({});

    // Sets specified task completion status
    const updateTask = (taskId, status) => {
        setTasks(tasks.map((data) => {
            if (data.id === taskId) {
                let newData = data;
                newData.complete = status;
                return newData;
            }
            else {
                return data;
            }
        }));
    }

    // Attaches component update to page focus event
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setTasks(fetchTasks());
            forceUpdate();
        });

        return unsubscribe;
    }, [navigation]);

    // Set selected sublist index to first (0th) when switching lists
    useEffect(() => {
        setSelectedTab(0);
    }, [value]);

    // Get the name of selected subcategory of current list
    let selectedSubList = "";
    if (lists === null || lists === undefined ) {}
    else {
        if ( lists[value] != undefined) {
            let currentTabData = Object.entries(lists[value].categories)[selectedTab];
            if (currentTabData != undefined) {
                selectedSubList = currentTabData[1].value;
            }
        }
    }

    // If tasks is empty and hasn't loaded, fetch data 
    if (Object.entries(tasks).length === 0 && !hasLoadedTask) {
        setTimeout(() => {
            setTasks(fetchTasks());
        }, 1000);
    }

    // If list is empty, fetch data
    if (Object.entries(lists).length === 0) {
        setTimeout(() => {
            setLists(fetchLists());
        }, 1000);
    }
    
    return (
        <>
            <StatusBarPlaceholder />
            <View className="relative flex-grow items-center" style={{ color: colors.text }}>
                <ListSelector 
                lists={lists} 
                value={value} 
                setValue={setValue}/>

                <TaskView 
                tasks={tasks} 
                setTasks={setTasks} 
                selected={value} 
                selectedSub={selectedSubList} 
                updateTask={updateTask} 
                hasLoadedTasks={hasLoadedTask}/>

            </View>
            <SubListNav 
            selectedTab={selectedTab} 
            setSelectedTab={setSelectedTab} 
            lists={lists || {}} 
            selectedList={value}/>
        </>
    );
}

export default HomeScreen;