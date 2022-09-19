import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

// Colores y fuentes
import colores from '../desing/colores';
import fuentes from '../desing/fuentes';

export const Header = ({ setPesoIngresado }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Calcula tu peso en otro</Text>
            <Text style={styles.title}>Planeta</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu peso"
                    placeholderTextColor={colores.grayDark}
                    keyboardType="numeric"
                    onChangeText={setPesoIngresado}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: colores.secondary,
        height: 248,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    text: {
        color: colores.white,
        fontSize: 20,
        fontFamily: fuentes.opensans,
        marginBottom: 8,
    },
    title: {
        color: colores.primary,
        fontSize: 40,
        textTransform: 'uppercase',
        fontFamily: fuentes.fjallaone,
    },
    inputContainer: {
        backgroundColor: colores.white,
        width: 250,
        borderRadius: 8,
        position: 'absolute',
        bottom: -32,
        overflow: 'hidden',
        shadowColor: colores.secondary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
    },
    input: {
        color: colores.secondary,
        fontFamily: fuentes.opensans,
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 20,
    },
});
