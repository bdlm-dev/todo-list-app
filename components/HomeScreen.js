import { Text, View, ScrollView, Pressable, useWindowDimensions } from 'react-native';
import StatusBarPlaceholder from './StatusBarPlaceholder';
import ListNav from './home/ListNav';
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { AppText} from './util';

function HomeScreen({ navigation }) {
    const [ selectedTab, setSelectedTab ] = useState(0);
    const { colors } = useTheme();
    
    return (
        <>
            <StatusBarPlaceholder />
            <View className="flex-grow items-center justify-center" style={{ color: colors.text }}>
                <AppText className="text-center">Home Screen</AppText>
            </View>
            <ListNav selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        </>
    );
}

export default HomeScreen;