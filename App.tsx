import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { SheetProvider } from "react-native-actions-sheet";
import MainScreen from "./app/examples";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./app/sheets";

const App = () => {
    return (
        <>
            <SafeAreaProvider>
                <GestureHandlerRootView style={styles.container}>
                    <SheetProvider context="global">
                        <MainScreen />
                    </SheetProvider>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
