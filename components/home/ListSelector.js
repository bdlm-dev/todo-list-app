import { View } from 'react-native';
import { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import { getListItems } from '../data/data';

// Dropdown component to select active list
export default function ListSelector({lists, value, setValue}) {
    
    DropDownPicker.setTheme("DARK");
    
    // Dropdown state initialisation
    // This dropdown package requires the props be stateful
    const [open, setOpen] = useState(false);
    // Fetch [k, v] pairs of list key: label for use in dropdown
    const [items, setItems] = useState(getListItems(lists));

    // Update local item state when lists prop updated
    useEffect(() => {
        setItems(getListItems(lists));
    }, [lists]);

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