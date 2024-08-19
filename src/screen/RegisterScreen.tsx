import React, { useState } from 'react'
import { Image, StatusBar, Text, View, Alert, Modal } from 'react-native'
import { PRIMARY_COLOR } from '../commons/Contances'
import { TitleComponents } from './components/TitleComponents'
import { BodyComponents } from './components/BodyComponents';
import { styles } from '../theme/apptheme'
import { InputComponents } from './components/InputComponents'
import { ButtonComponent } from './components/ButtonComponent';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

interface Props {
  users: User[];
  setListUsers: (user: User[]) => void;
}

interface FormRegister {
  nombre: string,
  apellido:string,
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterScreen = ({ users, setListUsers }: Props) => {
  const [formRegister, setFormRegister] = useState<FormRegister>({
    email: '',
    password: '',
    confirmPassword: '',
    nombre: '',
    apellido: '',
  });

  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const navigation = useNavigation();

  const handleSetValues = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleSignUp = () => {
    // Validar que todos los campos estén completos
    if (formRegister.nombre === '' ||formRegister.apellido === '' || formRegister.email === '' || formRegister.password === '' || formRegister.confirmPassword === '') {
      Alert.alert('Error', 'Debe completar todos los campos para registrar');
      return;
    }

    // Validar el formato del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formRegister.email)) {
      Alert.alert('Error', 'El correo electrónico no es válido');
      return;
    }

    // Validar la longitud y el contenido de la contraseña
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(formRegister.password)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres, incluyendo letras y números');
      return;
    }

    // Validar que las contraseñas coincidan
    if (formRegister.password !== formRegister.confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    // Validar que el usuario no esté registrado
    if (verifyUser() != null) {
      Alert.alert('Error', 'El correo electrónico ya está registrado');
      return;
    }

    // Registrar un nuevo usuario
    const getIdUsers = users.map(user => user.id);
    const getNewId = Math.max(...getIdUsers) + 1;
    const newUser: User = {
      id: getNewId,
      email: formRegister.email,
      password: formRegister.password,
      confirmPassword: formRegister.confirmPassword
    };

    setListUsers([...users, newUser]);

    Alert.alert(
      'Éxito',
      'El Usuario ha sido registrado correctamente',
      [{ text: 'OK', onPress: () => navigation.dispatch(CommonActions.navigate({ name: 'Login' })) }]
    );
  };

  const verifyUser = () => {
    return users.find(user => user.email === formRegister.email);
  }

  return (
    <View style={styles.contentPrincipal}>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <View style={styles.titleContainer}>
        <TitleComponents title='REGISTRO' />
      </View>
      <BodyComponents>
        <View>
          <Text style={styles.titleHeaderBody}>¡Aquí inicia tu Aventura!</Text>
          <Text style={styles.textBody}>Asegúrate de llenar tus datos correctamente para poder registrarte.</Text>
          <Image source={{ uri: 'https://i.gifer.com/KWZg.gif' }}
            style={styles.gifImage}
            resizeMode='contain' />
        </View>
        <View style={styles.contentInput}>
        <InputComponents
            placeholder='Nombres'
            handleSetValues={handleSetValues}
            name='nombre' />
        <InputComponents
            placeholder='Apellido'
            handleSetValues={handleSetValues}
            name='apellido' />
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
          <InputComponents
            placeholder='Confirm Password'
            handleSetValues={handleSetValues}
            name='confirmPassword'
            isPasword={hiddenPassword}
            hasIcon={true}
            setHiddenPassword={() => setHiddenPassword(!hiddenPassword)} />
        </View>
        <ButtonComponent
          textButton='Registrarse'
          onPress={handleSignUp} />

        <ButtonComponent
          textButton='Regresar' onPress={() => navigation.goBack()} />
      </BodyComponents>
    </View>
  )
}
