import { Text, View } from 'react-native';
import Constants from 'expo-constants';

// Takes up the space at the top of the screen
// Where status bar is (time, wifi status, battery, etc.,)
// In case navigation header is not used

function StatusBarPlaceholder() {
    const statusBarHeight = Constants.statusBarHeight || 0;

    return (
        <View style={{marginTop:statusBarHeight}} />
    )
}

export default StatusBarPlaceholder;