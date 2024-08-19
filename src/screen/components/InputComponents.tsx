import React from 'react'
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../theme/apptheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../commons/Contances';


//Interface - props
interface Props {
  placeholder: string;
  handleSetValues: (name: string, value: string) => void; //prop función para actualizar el estado del formulario
  name: string;
  isPasword?: boolean; // -? => es un prop opcional
  hasIcon?: boolean;
  securityTextEntry?: boolean;
  keyboardType?: string;
  //accionIcon: () => void; //prop fuction
  setHiddenPassword?: (value: boolean) => void;
}

export const InputComponents = ({ placeholder, handleSetValues, name, isPasword = false, setHiddenPassword, hasIcon = false }: Props) => {
  return (
    
    <View>
      {
        (hasIcon)
          ? <Icon
            name='visibility'
            size={25}
            color= '#33dd33'
            onPress={() => setHiddenPassword && setHiddenPassword(!isPasword)}
            style={styles.iconPassword} />
          : null
      }
      <TextInput
        placeholder={placeholder}
        keyboardType='default'
        secureTextEntry={isPasword}
        onChangeText={(value) => handleSetValues(name, value)}
        style={styles.inputText} />
    </View>
  )
}
//opacity = {isPasword ? 2 : 0}