import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

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
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={uriIMG.direccion[nombre.toLowerCase()]}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.info}>
                <View style={styles.result}>
                    <Text style={styles.number}>{formatearResultado()}</Text>
                    <Text style={styles.kilo}>KG</Text>
                </View>

                <Text style={styles.planeta}>{nombre}</Text>
            </View>
        </View>
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
