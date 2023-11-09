import { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { AppText } from './util';
import { listsData, getListItems, addTask } from './data/data';

// Modal for creating new task
// Allows creation of task within specified list with specified name
export default function NewTaskModal({ navigation }) {

    // Dropdown state 
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(getListItems(listsData));

    // Text input state
    const [ text, setText ] = useState("")

    // Would much prefer to do this with a form & rest api
    
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View className="h-[400px] bg-stone-900 w-screen mt-auto rounded-t-lg pt-4">
                <AppText className="text-3xl text-center font-bold">New Task</AppText>
                
                <View className="py-4">
                    {/* Select list */}
                    <DropDownPicker 
                    zIndex={100}
                    zIndexInverse={50}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    />
                </View>

                {/* Enter task name */}
                <TextInput
                className="w-full bg-stone-400 mb-4 rounded-lg px-4 py-2 text-lg"
                onChangeText={setText}
                value={text}
                placeholder={"Task Name..."}/>

                <View className="w-full flex flex-row justify-evenly">
                    
                    {/* Inbuilt button has limited styling, but <Pressable> is unnecessary */}
                    {/* So just styling width via a container */}
                    <View className="w-[30%]">
                        {/* Don't create if no text entered, or no list selected */}
                        <Button onPress={() => {
                            if (text != "" && value != null) {
                                addTask({label: text, category: value});
                                setTimeout(() => {navigation.goBack()}, 500);
                            }
                        }} title="Create" />
                    </View>

                    <View className="w-[30%]">
                        <Button onPress={() => navigation.goBack()} title="Cancel" />
                    </View>
                </View>
            </View>
        </View>
    )
}
