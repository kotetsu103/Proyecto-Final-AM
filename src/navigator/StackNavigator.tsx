import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { PRIMARY_COLOR } from '../commons/Contances';
import { RegisterScreen } from '../screen/RegisterScreen';
import { useState } from 'react';
import { Cart, HomeScreen} from '../screen/HomeScreen/HomeScreen';
import { Products } from '../screen/HomeScreen/Products';

//interface - arreglo objetos
export interface User {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  cart: Cart[];//arreglo con la lista de productos en el carrito de compras 
  emptyCart: () => void;
}

interface Cart {
  id: number;
  name: string;
  price: number;
  totalQuantity: number;
  pathImage: string;
}


const Stack = createStackNavigator();

export const StackNavigator = () => { //ARROW FUNCTION

  //arreglo con los usuarios para iniciar sesión
  const users: User[] = [
    { id: 1, email: 'dallumi2004@gmail.com', password: '123456', confirmPassword: '123456' },
    { id: 2, email: 'BrianRro80@gmail.com', password: '1234567', confirmPassword: '1234567' },
    { id: 3, email: 'EmilioChu50@gmail.com', password: '12345678', confirmPassword: '12345678' },
    { id: 3, email: 'FrancoJ85@gmail.com', password: '12345678', confirmPassword: '12345678' },
    { id: 4, email: 'PepitoLuis2004@gmail.com', password: '789123', confirmPassword: '789123' },
  ];


  //hook useState: para poder gestionar la lista de usuarios - iniciar y registrar
  const [usersList, setUsersList] = useState<User[]>(users);

    //hook useState: para poder gestionar la lista de usuarios - iniciar y registrar

  //funcion actualizar la data del arreglo - arreglar nuevos usuarios
  const handleAddUser = (user: User) => { //Agregar nuevos valores al arreglo
    //Agregar el nuevo usuario que reciba como parámetro
    setUsersList([...usersList, user]); //Operador de propagación... - va a sacar una copia del contenido/arreglo

  }

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: PRIMARY_COLOR
        }
      }}>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        children={() => <LoginScreen
          users={usersList}
          handleAddUser={handleAddUser} />} />

      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        children={() => <RegisterScreen
          users={usersList}
          setListUsers={setUsersList}/>} />

      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen} />
      
      <Stack.Screen
        name="Productos"
        options={{ headerShown: false }}
        children={() => <Products
          cart={Cart[]}
          emptyCart={}/>} />
        
    </Stack.Navigator>
  );
}