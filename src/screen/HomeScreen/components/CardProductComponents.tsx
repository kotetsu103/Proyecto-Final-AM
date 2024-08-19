import React, { useState } from 'react'
import { Image, Modal, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/apptheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProductComponents } from './ModalProductComponents';

//interface - props
interface Props {
  product: Product;
  changeStockProduct: (idProduct: number, quantity: number) => void; //función para actualizar el stock de productos
}

export const CardProductComponents = ({ product, changeStockProduct }: Props) => {
  //hook useState: permitir que se haga visible/no visible el contenido del modal
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <View>
      <View style={styles.contentCard}>
        <Image source={{ 
          uri: product.pathImage }} 
          style={styles.imageCard} />

        <View>
          <Text style={styles.titleCard}>{product.name}</Text>
          <Text style={styles.priceCard}> Precio: ${product.price}</Text>
        </View>

        <View style={styles.iconCard}>
          <Icon name='add-shopping-cart'
            onPress={() => setShowModal(!showModal)}
            size={25} color='#0000ff' />
        </View>

      </View>
      <ModalProductComponents
        isVisible={showModal}
        setShowModal={() => setShowModal(!showModal)}
        product={product} 
        changeStockProduct={changeStockProduct}/>
    </View>
  )
}
