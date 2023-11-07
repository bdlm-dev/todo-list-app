import { View } from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import { getListItems } from '../data/data';

// Dropdown component to select active list
export default function ListSelector({lists, value, setValue}) {
    
    DropDownPicker.setTheme("DARK");

    // Fetch [k, v] pairs of list key: label for use in dropdown
    const listItems = getListItems(lists);

    // Dropdown state initialisation
    // This dropdown package requires the props be stateful
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(listItems);

    return(
        <View className="relative pb-4 z-50 px-2">
            <DropDownPicker 
            zIndex={100}
            zIndexInverse={0}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
        </View>
    )
}