import React, { useState } from 'react'
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Modal } from 'react-native'
import { styles } from '../../../theme/apptheme';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';

//TouchableOpacity - Siempre debe ser importado desde react-native

//Interface - props
interface Props {
  product: Product;
  isVisible: boolean;
  setShowModal: () => void;
  changeStockProduct: (idProduct: number, quantity: number) => void; //función para actualizar el stock de productos
}

export const ModalProductComponents = ({ isVisible, setShowModal, product, changeStockProduct }: Props) => {

  //hook useWindowDimensions(): obtener las dimensiones/tamaño de la pantalla
  const { width } = useWindowDimensions();

  //hook useState: permitir que se haga visible/no visible el contenido del modal
  const [quantity, setQuantity] = useState<number>(1);

  //funcion para actualizar el valor de la cantidad de productos
  const handleChangeQuatity = (value: number) => {
    setQuantity(value + quantity);
  }

  //funcion para agregar productos al carrito
  const handleAddProduct = () => {
    changeStockProduct(product.id, quantity);
    setQuantity(1);
    setShowModal();
  }



  return (
    <Modal visible={isVisible} animationType='slide' transparent={true}>
      <View style={styles.contentPrincipal2}>

        <View style={{
          ...styles.contentModal,
          width: width * 0.80
        }}>
          <View style={styles.headerModal}>
            <View>
            <Text style={styles.titleModal}>{product.name}</Text>
            <Text style={styles.titleModal}>${product.price.toFixed(2)}</Text>
            </View>
            <View style={styles.iconModal}>
              <Icon
                name='cancel'
                size={27}
                color='#f22b53'
                onPress={setShowModal} />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{
                uri: product.pathImage
              }}
              style={styles.imageModal} />
          </View>

          {
            product.stock === 0
              ? <Text style={styles.messageStock}>Producto agotado!</Text>
              : <View>
                <View style={styles.contentQuantity}>
                  <TouchableOpacity
                    onPress={() => handleChangeQuatity(1)}
                    disabled={quantity === product.stock}
                    style={styles.buttonQuantity}>
                    <Text style={styles.textButtonQuantity}> + </Text>
                  </TouchableOpacity>
                  <Text style={styles.textQuantity}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => handleChangeQuatity(-1)}
                    disabled={quantity === 1}
                    style={styles.buttonQuantity}>
                    <Text style={styles.textButtonQuantity}> - </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={styles.textQuantity}>
                    Total: ${(product.price * quantity).toFixed(2)}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={handleAddProduct}
                  style={styles.buttonAddCar}>
                  <Text style={styles.textButtonAddCar}>Agregar Carrito</Text>
                </TouchableOpacity>
              </View>
          }
        </View>
      </View>
    </Modal>
  )
}
