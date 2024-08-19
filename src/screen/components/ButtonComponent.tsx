import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../theme/apptheme';

//interface - props
interface Props {
    textButton: string;
    onPress: () => void; //propo función
}

export const ButtonComponent = ({textButton, onPress}: Props) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style = {styles.button}>
        <Text style = {styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  )
}
