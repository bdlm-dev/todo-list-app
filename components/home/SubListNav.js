import { View, ScrollView, RefreshControl, Pressable } from 'react-native';
import { useReducer } from 'react';
import { useTheme } from '@react-navigation/native';

import { AppText } from '../util';

// Subcategory filter navigation for active list
// As displayed above primary navigation at bottom of screen
export default function SubListNav({selectedTab, setSelectedTab, lists, selectedList}) {
    // Call forceUpdate() to forcibly update component
    // Will be called when subcategories are added to refresh display
    // If react doesn't manage to track update
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    // Fetch subcategories of active list
    let taskCategories = [];
    if (selectedList != null) {
        if (lists[selectedList] != undefined) {
            taskCategories = lists[selectedList].categories;
        }
    }
    
    // Generate selectable component for each subcategory
    const taskTabs = taskCategories.map((details, index) => {
        return (
        <ListNavTab 
        key={details.value} 
        label={details.label} 
        index={index} 
        selected={selectedTab === index}
        setSelectedTab={setSelectedTab} />)
    });

    return (
        <View className="mt-auto h-8 w-screen">
            <ScrollView 
            horizontal 
            bounces={false}
            className="min-w-screen">
                {taskTabs}
                <ListNavNew update={forceUpdate} label="+"/>
                {/* 
                Empty width-16 view to allow scrolling further than 
                last item to allow easier selection
                */}
                <View className="w-16"/>
            </ScrollView>
        </View>
    )
}

// Generic component for each subcategory in subcategory navigation
function ListNavTab({label, index, selected, setSelectedTab }) {
    const { colors } = useTheme();

    return( 
        <Pressable 
        onPress={() => {
            setSelectedTab(index);
        }}
        style={{backgroundColor: selected ? colors.primary : colors.primaryShade}}
        className={`w-[125px] h-full rounded-t-lg items-center justify-center`}>
            <AppText className="font-bold">{label}</AppText>
        </Pressable>
    )
}

// Component to direct creation of new subcategories
function ListNavNew({label, update}) {
    const { colors } = useTheme();
    
    return( 
        <Pressable 
        onPress={() => {
            // Make new tab on press (via modal?)
            // Choose name + tab colour?
            // Be able to reorder categories
            console.log("Create new subcategory here");
            update();
        }}>
            {({pressed}) => (
                <View 
                style={{
                    backgroundColor: pressed ?  colors.primary : colors.primaryShade,
                }}
                className={`w-[50px] h-full rounded-t-lg items-center justify-center`}>
                    <AppText className="text-2xl">{label}</AppText>
                </View>
            )}
        </Pressable>
    )
}