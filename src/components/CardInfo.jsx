import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

// Colores y fuentes
import colores from '../desing/colores';
import fuentes from '../desing/fuentes';

// Direcciones
import { uriIMG } from './../desing/direcciones';

export const CardInfo = ({ item, pesoIngresado }) => {
    const { nombre, gravedad } = item.item;

    const formatearResultado = () => {
        const resultado = (pesoIngresado * gravedad) / 9.807;
        return resultado.toFixed(1);
    };

    return (
        <Animated.View style={styles.card} entering={FadeIn}>
            <Animated.View style={styles.imageContainer} entering={FadeInDown.delay(200)}>
                <Image
                    style={styles.image}
                    source={uriIMG.direccion[nombre.toLowerCase()]}
                    resizeMode="contain"
                />
            </Animated.View>

            <View style={styles.info}>
                <Animated.View style={styles.result} entering={FadeInDown.delay(250)}>
                    <Text style={styles.number}>{formatearResultado()}</Text>
                    <Text style={styles.kilo}>KG</Text>
                </Animated.View>

                <Animated.Text style={styles.planeta} entering={FadeInDown.delay(280)}>
                    {nombre}
                </Animated.Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('screen').width - 40,
        height: 332,
        borderRadius: 12,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20,
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
    },
    image: {
        width: 188,
        height: 188,
    },
    info: {
        backgroundColor: colores.secondary,
        width: '95%',
        borderRadius: 12,
        height: 238,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    result: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    number: {
        color: colores.primary,
        fontFamily: fuentes.fjallaone,
        fontSize: 48,
    },
    kilo: {
        color: colores.white,
        fontSize: 16,
        marginLeft: 5,
    },
    planeta: {
        color: colores.white,
        fontFamily: fuentes.fjallaone,
        fontSize: 24,
        textTransform: 'uppercase',
        letterSpacing: 6,
        marginTop: 12,
        marginBottom: 30,
    },
});
