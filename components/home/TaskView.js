import { useState } from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { AppText } from '../util';

// Display all tasks in scrollable view according to current active list
export default function TaskView({tasks, selected, selectedSub, updateTask}) {
    // Generate Task component for every task applicable to current category & subcategory
    let taskJSX = tasks.map((data, index) => {
        if (data.category === selected ) {
            if (data.subcategory === "" || data.subcategory === selectedSub) {
                return <Task data={data} key={index} update={updateTask}/>
            }
        }
    }, tasks);

    return (
        <ScrollView className="relative z-10 w-screen">
            {taskJSX}
        </ScrollView>
    )
}

// Generic component for each task
function Task({data, update}) {
    const { colors } = useTheme();
    // State showing task completion status
    const [ complete, setComplete ] = useState(data.complete);

    return (
        <View 
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
        </View>
    )
}