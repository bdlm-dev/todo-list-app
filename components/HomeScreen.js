import { Text, View, Button } from 'react-native';
import StatusBarPlaceholder from './StatusBarPlaceholder';
import { useTheme } from '@react-navigation/native';
import { AppText} from './util';

function HomeScreen({ navigation }) {
    const { colors } = useTheme();
    
    return (
        <>
            <StatusBarPlaceholder />
            <View className="flex-grow items-center justify-center" style={{ color: colors.text }}>
                <AppText className="text-center">Home Screen</AppText>
                <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
                />
            </View>
        </>
    );
}

export default HomeScreen;