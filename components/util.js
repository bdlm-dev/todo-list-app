import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

// Text alternative to be used when against theme background
// Text colour dependent on theme
const AppText = ({ children, style}) => {
    const { colors } = useTheme();
    return (
        <Text {...this.props} style={[{color:colors.text}, style]}>{children}</Text>
    )
}

export { AppText };