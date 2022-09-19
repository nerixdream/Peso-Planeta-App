import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';

// Expo fonts & SplashScreen
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Componets
import { Header } from './src/components/Header';
import { CardInfo } from './src/components/CardInfo';

// Colores
import colores from './src/desing/colores';

// Data
import planetas from './src/data.json';
import { Await } from './src/components/Await';

export default function App() {
    const [pesoIngresado, setPesoIngresado] = useState(0);
    const [fontsLoaded] = useFonts({
        opensans: require('./assets/fonts/OpenSans.ttf'),
        fjallaone: require('./assets/fonts/FjallaOne.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Header pesoIngresado={pesoIngresado} setPesoIngresado={setPesoIngresado} />

            <View style={styles.containerResults}>
                {pesoIngresado > 0 ? (
                    <FlatList
                        data={planetas}
                        keyExtractor={item => item.nombre}
                        renderItem={item => <CardInfo item={item} pesoIngresado={pesoIngresado} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                ) : (
                    <Await />
                )}
            </View>

            <StatusBar style="light" backgroundColor={colores.secondary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colores.gray,
    },
    containerResults: {
        marginTop: 80,
    },
});
