import { View, ScrollView, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { AppText} from '../util';

export default function ListNav({selectedTab, setSelectedTab}) {
    
    const taskCategories = ["TODO", "In Progress", "Complete"];

    const taskTabs = taskCategories.map((category, index) => {
        return (
        <ListNavTab 
        key={category} 
        label={category} 
        index={index} 
        selected={selectedTab === index}
        setSelectedTab={setSelectedTab} />)
    });

    // empty w-16 view at end of scroll to allow scrolling past the last item,
    // so is easier to reach farthest item

    return (
        <View className="mt-auto h-8 w-screen">
            <ScrollView horizontal className="min-w-screen">
                {taskTabs}
                <ListNavNew label="+"/>
                <View className="w-16"/>
            </ScrollView>
        </View>
    )
}

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

function ListNavNew({label}) {
    const { colors } = useTheme();
    
    return( 
        <Pressable 
        onPress={() => {
            // option to make new tab
            // via modal
            // Choose name + tab colour?
            // Be able to reorder categories
            console.log("Create new category");
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