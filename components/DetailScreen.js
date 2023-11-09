import { View, Button } from 'react-native';
import { AppText } from './util';
import { clearAll } from './data/savedata';

// Screen to contain settings implementation
function DetailScreen({ navigation }) {
    return (
      <View className="flex-grow">
            <AppText>Settings Screen :)</AppText>
            <AppText>select appearance (light/dark)</AppText>
            <AppText>clear data</AppText>
            <AppText>export data?</AppText>
      </View>
    );
  }

export default DetailScreen