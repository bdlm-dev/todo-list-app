import { View, Pressable } from 'react-native';
import { useTheme, useNavigation, CommonActions } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { AppText } from './util';

// Central navigation controls
// Navigate to: Home, Settings, Create Task Modal
function NavControls() {
    const { colors } = useTheme();
    // NavControls are outside of the nav stack
    // So {navigation} must be accessed via hook
    const navigation = useNavigation();

    return (
        <View 
        style={{ backgroundColor: colors.primary}}
        className="flex flex-col items-center justify-evenly ">

            <View className="w-full h-[70px] flex flex-row items-center justify-evenly pt-2">
                <NavButton 
                onPress={()=>{
                    navigateToHome(navigation);
                }}
                icon="home"
                label="Home"/>

                <NewTaskButton 
                onNewTask={() => {
                    navigation.navigate('New Task')
                }}/>

                <NavButton 
                onPress={()=>{navigation.navigate('Settings')}}
                icon="settings"
                label="Settings"/>
            </View>

            <View className="nav-spacing h-2 w-full"/>

        </View>
    )
}

// Returns button as used in central nav
// Params: MaterialIcons icon string, button label, onPress func
const NavButton = ({icon, label, onPress}) => {
    const { colors } = useTheme();

    return (
        <Pressable
        className="min-w-fit w-[60px] flex flex-col justify-center items-center h-full mt-2"
        onPress={onPress}>
            {({ pressed }) => (
                <>
                    <MaterialIcons 
                    name={icon} 
                    size={40} 
                    color={colors.text} 
                    style={{color: pressed ? colors.background : colors.text}}/>
                    <AppText className="text-center text-xs">{label}</AppText>
                 </>
            )}
        </Pressable>
    )
}


// Button in nav for launching create task modal
const NewTaskButton = ({onNewTask}) => {
    const { colors } = useTheme();

    return(
        <Pressable
        className="justify-center items-center"
        
        onPress={onNewTask}>
            {({ pressed }) => (
            <MaterialIcons 
            name="add-box"
            size={64} 
            color={colors.text} 
            style={{color: pressed ? colors.background : colors.text}}/>
            )}
        </Pressable>
    );
}

// Could be placed in util.js?
// Attempts to reset navigation state and revert to home with empty stack
// Because navigation.popToTop() wasn't working for whatever reason
const navigateToHome = (navigation) => {
    if (navigation.getState() != undefined) {
        if (navigation.getState().index != 0) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Home' },
                    ]
                })
            )
        }
    }
}

export default NavControls;