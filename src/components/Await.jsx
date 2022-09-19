import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';

export const Await = () => {
    return (
        <Animated.View style={styles.container} entering={FadeInDown}>
            <Image style={styles.image} source={require('../../assets/field.png')} resizeMode="contain" />
        </Animated.View>
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
