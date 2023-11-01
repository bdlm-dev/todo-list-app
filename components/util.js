import { View, Text, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { styled } from "nativewind";

const AppText = ({ children, style}) => {
    const { colors } = useTheme();
    return (
        <Text {...this.props} style={[{color:colors.text}, style]}>{children}</Text>
    )
}

export { AppText };