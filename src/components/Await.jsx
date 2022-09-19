import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

export const Await = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/field.png')} resizeMode="contain" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('screen').width - 20,
        height: 200,
    },
});
