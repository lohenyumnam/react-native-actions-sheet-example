import React from "react";
import { Text, View, Button } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function DialogBox() {
    const insets = useSafeAreaInsets();
    return (
        <ActionSheet
            indicatorStyle={{
                width: 150,
            }}
            animated={false}
            isModal={false}
            containerStyle={{
                height: "100%",
                width: "100%",
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    backgroundColor: "white",
                    padding: 24,
                    borderRadius: 10,
                    margin: 16,
                }}
            >
                <Text
                    style={{
                        color: "black",
                        fontSize: 19,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Use as Dialog Box
                </Text>
                <View style={{ height: 16 }} />
                <Text
                    style={{
                        color: "gray",
                        fontSize: 14,
                        fontWeight: "400",
                        textAlign: "center",
                    }}
                >
                    This is the Best Bottom / Action Sheet
                </Text>
                <Button
                    title="Close me"
                    onPress={() => {
                        SheetManager.hide("dialog-box");
                    }}
                />
            </View>
        </ActionSheet>
    );
}
