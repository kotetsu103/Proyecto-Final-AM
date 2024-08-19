import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native';
import { styles } from '../../theme/apptheme';

export const BodyComponents = (props: any) => {
    
    //console.log (props) ;
  
    //HOOK useWindowDimension - tamaño de la pantalla
    const {height} = useWindowDimensions();
    return (
        <View style={{
            ...styles.contentBody,
            height: height * 0.95
        }}>
            {props.children} 
        </View> //props.children - SE INYECTARA DE FORMA ALEATORIA son componentes del view
  )
}
