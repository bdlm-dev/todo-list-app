import { View } from 'react-native';
import Constants from 'expo-constants';

// Takes up the space at the top of the screen
// Where status bar is (time, wifi status, battery, etc.,)
// In case navigation header is not used
// So that page content is not underneath status details

function StatusBarPlaceholder() {
    const statusBarHeight = Constants.statusBarHeight || 0;

    return (
        <View style={{marginTop:statusBarHeight, paddingTop:10}} />
    )
}

export default StatusBarPlaceholder;