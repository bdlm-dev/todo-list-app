import { useState, useEffect, useReducer } from 'react';
import { View, ScrollView, Pressable, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { AppText } from '../util';
import { removeTask } from '../data/data';
import { storeTasks } from '../data/savedata';

// Display all tasks in scrollable view according to current active list
export default function TaskView({tasks, setTasks, selected, selectedSub, updateTask, hasLoadedTasks}) {
    const { colors } = useTheme();

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    // Update self and save tasks data when tasks updates.
    useEffect(() => {
        forceUpdate();
        storeTasks(tasks, hasLoadedTasks);
    }, [tasks])

    // Modal for deleting tasks
    // Opened by long-press on tasks
    const [modalOpen, setModalOpen] = useState(false);
    const [taskToManage, setTaskToManage] = useState(null);
    const taskManageModal = 
    <View className="absolute bottom-0 mb-4 z-[10000]">
        <Pressable className="bg-stone-800 opacity-50 h-screen w-screen" onPress={() => {
            setModalOpen(false);
        }}></Pressable>
        <View>
            <Button 
            color={colors.failure} 
            onPress={() => {
                setTasks(removeTask(taskToManage.id));
                setModalOpen(false);
            }}
            title={`DELETE TASK: ${taskToManage === null ? "" : taskToManage.label}`} />
        </View>
    </View>
    
    // Open task management modal for given task
    const manageTask = (data) => {
        setTaskToManage(data);
        setModalOpen(true);
    }

    // Generate Task component for every task applicable to current category & subcategory
    let taskJSX = "";
    if (tasks != null) {
        if (Object.keys(tasks).length != 0) {
            taskJSX = tasks.map((data, index) => {
                if (data.category === selected ) {
                    if (data.subcategory === "" || data.subcategory === selectedSub) {
                        return <Task data={data} key={index} update={updateTask} manageTask={manageTask}/>
                    }
                }
            }, tasks);
        }
    }

    return (
        <>
        {modalOpen ? taskManageModal : ""}
        <ScrollView className="relative z-10 w-screen">
            {taskJSX}
        </ScrollView>
        </>
    )
}

// Generic component for each task
function Task({data, update, manageTask}) {
    const { colors } = useTheme();
    // State showing task completion status
    const [ complete, setComplete ] = useState(data.complete);

    return (
        <Pressable 
        onLongPress={() => {
            // Open task management modal
            // And pass task data to manage
            manageTask(data);
        }}
        className={`
        ${complete ? "bg-stone-800 opacity-70" : "bg-stone-700"}
        box-border p-4 mt-2 mx-4 rounded-md flex-row
        `}>
            <AppText className="text-lg">{data.label}</AppText>
            <Pressable 
            className={`ml-auto w-8 h-8 rounded-lg justify-center items-center text-lime-500
            ${ complete ? "bg-stone-700 " : "bg-stone-400"}`} 
            onPress={() => {
                // Assigns new task completion status
                // to both component state, and task 'database'
                let newState = !complete;
                setComplete(newState);
                update(data.id, newState);
            }}>
                {/* Display tick if complete */}
                {complete ? 
                    <MaterialIcons 
                    name="done"
                    size={30} 
                    style={{color: colors.success}}/>
                    : ""}
            </Pressable>
        </Pressable>
    )
}