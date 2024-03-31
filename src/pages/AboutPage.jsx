import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export function AboutPage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>Nossa Empresa</Text>
                <Text>Nossos Colaboradores</Text>
                <Text>Contatos:</Text>
                <Text>nossaempresa@email.com</Text>
                <Text>(21) 00000-0000</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 8,
        gap: 4,
    },
});