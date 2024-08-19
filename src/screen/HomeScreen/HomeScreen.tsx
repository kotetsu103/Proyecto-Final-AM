import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TitleComponents } from '../components/TitleComponents';
import { BodyComponents } from '../components/BodyComponents'
import { FlatList } from 'react-native-gesture-handler';
import { CardProductComponents } from './components/CardProductComponents';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/apptheme';
import { ModalCartComponents } from './components/ModalCartComponents';
import { CommonActions, useNavigation } from '@react-navigation/native';

//interface - productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
    description: string;
}

//interface - arreglo del carrito de compras
export interface Cart {
    id: number;
    name: string;
    price: number;
    totalQuantity: number;
    pathImage: string;
}

export const HomeScreen = () => {
    //arreglo de productos
    const products: Product[] = [
        {
            id: 1,
            name: 'Pintura Naranja Wesco',
            price: 4.56,
            stock: 10,
            pathImage: 'https://www.pintulac.com.ec/media/catalog/product/cache/01d5a80ef248257bf9991bbfc9cf4de4/c/o/covertone-gl.png',
            description: 'Pintura convertone wesco'
        },

        {
            id: 2,
            name: 'Pintura Azul Wesco',
            price: 6.50,
            stock: 25,
            pathImage: 'https://www.pintulac.com.ec/media/catalog/product/cache/01d5a80ef248257bf9991bbfc9cf4de4/m/o/mockup_caneca_duratex_2021.png',
            description: 'Pintura convertone wesco'
        },

        {
            id: 3,
            name: 'Pintura Celeste Wesco',
            price: 21.60,
            stock: 10,
            pathImage: 'https://www.pintulac.com.ec/media/catalog/product/cache/01d5a80ef248257bf9991bbfc9cf4de4/w/2/w2200-gl.jpg',
            description: 'Pintura convertone wesco preumin'
        },

        {
            id: 4,
            name: 'Pintura Roja Wesco',
            price: 23.07,
            stock: 30,
            pathImage: 'https://www.pintulac.com.ec/media/catalog/product/cache/01d5a80ef248257bf9991bbfc9cf4de4/w/8/w8503-gl.jpg',
            description: 'Pintura convertone wesco preumin'
        },

        {
            id: 5,
            name: 'Pintura Negra Wesco',
            price: 29.99,
            stock: 7,
            pathImage: 'https://www.pintulac.com.ec/media/catalog/product/cache/01d5a80ef248257bf9991bbfc9cf4de4/w/1/w1650-gl.jpg',
            description: 'Pintura convertone wesco preumin'
        }
    ];

    //hook useState: manipular el estado del arreglo de productos
    const [productsState, setProductsState] = useState(products);

    //hook useState: manipular el estado del carrito de compras
    const [cart, setCart] = useState<Cart[]>([]);

    //hook useState: manipular la visibilidad del modal
    const [showModal, setShowModal] = useState(false);

    const navigation = useNavigation();


    //funcion para actualizar el stock de productos
    //const changeStockProduct = (idProduct: number, quantity: number) => {
        //generar un nuevo arreglo con las actualizaciones del stock //map - generar un nuevo arreglo
        //const updateStock = productsState.map(product => product.id === idProduct
            //? { ...product, stock: product.stock - quantity }
            //: product);
        //Actualizar el productosState
        //setProductsState(updateStock);
        //Llamar la funcion para agregar el producto al carrito de compras
        //addProduct(idProduct, quantity);
    //}

    const changeStockProduct = (idProduct: number, quantity: number) => {
        // Generar un nuevo arreglo con las actualizaciones del stock
        const updateStock = productsState.map(product =>
            product.id === idProduct
                ? { ...product, stock: product.stock - quantity }
                : product
        );
        setProductsState(updateStock);
    
        // Llamar a la función para agregar el producto al carrito
        addProduct(idProduct, quantity);
    };


    const addProduct = (idProduct: number, quantity: number) => {
        // Buscar el producto que se va a agregar al carrito de compras
        const product = productsState.find(product => product.id === idProduct);
        if (!product) return;
    
        // Verificar si el producto ya está en el carrito
        const productInCart = cart.find(item => item.id === idProduct);
    
        if (productInCart) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            const updatedCart = cart.map(item =>
                item.id === idProduct
                    ? { ...item, totalQuantity: item.totalQuantity + quantity }
                    : item
            );
            setCart(updatedCart);
        } else {
            // Si el producto no está en el carrito, agregarlo
            const newProductCart: Cart = {
                id: product.id,
                name: product.name,
                price: product.price,
                totalQuantity: quantity,
                pathImage: product.pathImage
            };
            setCart([...cart, newProductCart]);
        }
    };

    const filterUniqueProducts = (cart: Cart[]) => {
        const seen = new Set();
        return cart.filter(product => {
            const duplicate = seen.has(product.id);
            seen.add(product.id);
            return !duplicate;
        });
    };

    const uniqueCart = filterUniqueProducts(cart);

    const emptyCart = () => {
        setCart([]);
    };
    
    const isCartEmpty = uniqueCart.length === 0;
    return (
        <View>
            <View style={styles.contentHeaderHome}>
                <TitleComponents title='Productos' />
                <View style={styles.iconCardHome}>
                    <Text style={styles.textIconCard}>{uniqueCart.length}</Text>
                    <Icon
                        name='add-shopping-cart'
                        size={25} color='#ffa500'
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}
                        disabled={isCartEmpty}/>
                </View>
            </View>
            <BodyComponents>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CardProductComponents product={item} changeStockProduct={changeStockProduct} />}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponents>
            <ModalCartComponents
                isVisible={showModal}
                cart={cart}
                setShowModal={() => setShowModal(!showModal)}
                emptyCart={emptyCart} />
        </View>
    )
}
