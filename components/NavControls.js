import { Text, View, Pressable, Button} from 'react-native';
import { useTheme, useNavigation, CommonActions } from '@react-navigation/native';
import { AppText } from './util';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


function NavControls() {
    const { colors } = useTheme();
    const navigation = useNavigation();


    // Home Nav Reset should only work when not on home page; DONE
    // Turn into external function to allow use in multiple places
    // npx expo start (-c)
    // shift+a to select emulator


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

                <CircleButton 
                onNewTask={() => {
                    console.log("Handle new task creation (with modal)");
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

const NavButton = ({icon, label, onPress}) => {
    const { colors } = useTheme();

    return (
        <Pressable
        className="min-w-fit w-[60px] flex flex-col justify-center items-center h-full mt-2"
        onPress={onPress}>
            {({ pressed }) => (
                <>
                    <MaterialIcons name={icon} size={40} color={colors.text} style={{color: pressed ? colors.background : colors.text}}/>
                    <AppText className="text-center text-xs">{label}</AppText>
                 </>
            )}
        </Pressable>
    )
}

const CircleButton = ({onNewTask}) => {
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