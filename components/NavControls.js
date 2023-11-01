import { Text, View, Button} from 'react-native';
import { useTheme, useNavigation, CommonActions } from '@react-navigation/native';
import { StyledView, StyledButton } from './util';


function NavControls() {
    const { colors } = useTheme();
    const navigation = useNavigation();


    // Home Nav Reset should only work when not on home page;
    // Turn into external function to allow use in multiple places
    // npx expo start (-c)


    return (
        <View 
        style={{ backgroundColor: colors.primary}}
        className="flex flex-row items-center justify-evenly h-[90px] border-t-2 border-stone-50">

            <NavButton 
            onPress={()=>{navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'Home' },
                    ]
                })
            )}}
            title="Home"/>

            <NavButton 
            title="New Task"/>

            <NavButton 
            onPress={()=>{navigation.navigate('Details')}}
            title="Settings"/>

        </View>
    )
}

const NavButton = ({title, onPress}) => {
    const { colors } = useTheme();

    return (
        <View>
            <Button 
            title={title}
            color={colors.border}
            onPress={onPress}
            {...this.props}/>
        </View>
    )
}

export default NavControls;