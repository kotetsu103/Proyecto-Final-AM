import React, { useState } from 'react'
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import { TitleComponents } from './components/TitleComponents';
import { StatusBar } from 'expo-status-bar';
import { PRIMARY_COLOR } from '../commons/Contances';
import { BodyComponents } from './components/BodyComponents';
import { styles } from '../theme/apptheme';
import { InputComponents } from './components/InputComponents';
import { ButtonComponent } from './components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface - props
interface Props {
  users: User[]
  handleAddUser: (user: User) => void;
}

//interface - objeto
interface FormLogin {
  email: string;
  password: string;
}

export const LoginScreen = ({ users }: Props) => { //ARROW FUNCTION

  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: '',
  });

  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const navigation = useNavigation();

  const handleSetValues = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value });
  }

  const handleSignIn = () => {
    if (formLogin.email === '' || formLogin.password === '') {
      Alert.alert(
        'Error',
        'Por favor, ingrese valores en todos los campos!'
      );
      return;
    }
    
    const user = verifyUser();

    if (user) {
      Alert.alert(
        '¡Enhorabuena!',
        'Has iniciado la sesión exitosamente!'
      );
      navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    } else {
      Alert.alert(
        'Error',
        'Correo y/o contraseña incorrecta!'
      );
    }
  }

  const verifyUser = () => {
    return users.find(user => user.email === formLogin.email && user.password === formLogin.password);
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <View style={styles.titleContainer}>
        <TitleComponents title="INICIAR SESIÓN" />
      </View>
      <BodyComponents>
        <View style={styles.contentBody}>
          <Text style={styles.titleHeaderBody}>¡Bienvenido de nuevo!</Text>
          <Text style={styles.textBody}>Realiza tus compras de manera rápida, eficiente y segura</Text>
          <Image source={{ uri: 'https://i.gifer.com/KgWS.gif' }}
            style={styles.gifImage}
            resizeMode='contain'/>
        </View>
        <View style={styles.contentInput}>
          <InputComponents
            placeholder='Email'
            handleSetValues={handleSetValues}
            name='email' />
          <InputComponents
            placeholder='Password'
            handleSetValues={handleSetValues}
            name='password'
            isPasword={hiddenPassword}
            hasIcon={true}
            setHiddenPassword={() => setHiddenPassword(!hiddenPassword)} />
        </View>
        <ButtonComponent textButton='Iniciar' onPress={handleSignIn} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
          <Text style={styles.textRedirection}>No tienes una cuenta? Regístrate aquí!</Text>
        </TouchableOpacity>
      </BodyComponents>
    </View>
  )
}
