import { Text, View, Button } from 'react-native';


function DetailScreen({ navigation }) {
    return (
      <View className="flex-grow">
            <Text>Details Screen</Text>
            <Button
            title="Go to Details... again"
            onPress={() => navigation.push('Settings')}
            />
      </View>
    );
  }

export default DetailScreen