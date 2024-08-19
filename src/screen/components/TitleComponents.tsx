import React from 'react'
import { Text, useWindowDimensions } from 'react-native';
import { styles } from '../../theme/apptheme';

//interface - props
interface Props {
    title: string;
}

export const TitleComponents = ({title}: Props) => {
    const {height} = useWindowDimensions();
    return (
        <Text style={{
            ...styles.globalTitle,
            height: height * 0.14
        }}>{title}</Text>
    )
}
