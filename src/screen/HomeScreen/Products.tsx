import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Cart } from './HomeScreen';
import { styles } from '../../theme/apptheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export interface Props {
    cart: Cart[];//arreglo con la lista de productos en el carrito de compras 
    emptyCart: () => void;
}


const navigation = useNavigation();

export const Products = ({cart, emptyCart}: Props) => {


    const totalPay = () =>{
        let total: number = 0;
        cart.forEach(Product => {
            total = total + Product.price * Product.totalQuantity
        });
        return total;
    }

    const handleSendInfo = () =>{
        emptyCart();
    }
  return (
    <View>
                            <View style={styles.headerModalCart}>
                        <Text style={styles.titleModalCartText}>Mi Paleta de Compras</Text>
                        <View style={styles.iconModalCart}>
                            <Icon
                                name='cancel'
                                size={27}
                                color='#f22b53'
                                style={{marginTop: 50}}
                                />
                        </View>
                    </View>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleCartTable}>Producto</Text>
                        <View style={styles.headerInformation}>
                        <Text style={{...styles.textInformation, marginHorizontal: 10}}>Precio</Text>
                        <Text style={{...styles.textInformation, marginHorizontal: 10}}>Cant.</Text>
                        <Text style={{...styles.textInformation, marginHorizontal: 10}}>Total</Text>
                        </View>
                    </View>
                    <FlatList
                        data={cart}
                        renderItem={({ item }) =>
                        <View style={styles.headerTable}>
                        <Text style={styles.titleCartModal}>{item.name}</Text>
                            <View style={styles.headerTable}>
                                 <Text style={styles.titlecart}>{item.price.toFixed(2)}</Text>
                                 <Text style={styles.titlecart}>{item.totalQuantity}</Text>
                                 <Text style={styles.titlecart}>{(item.price * item.totalQuantity).toFixed(2)}</Text>
                            </View>
                            </View>}
                        keyExtractor={item => item.id.toString()} />
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={styles.textTotalPay}>Total pagar: ${totalPay().toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonAddCar} onPress={handleSendInfo}>
                            <Text style={styles.textButtonAddCar}>Comprar</Text>
                        </TouchableOpacity>
    </View>
  )
}
