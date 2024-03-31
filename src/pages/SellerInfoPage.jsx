import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export function SellerInfoPage({ route }) {
    const { vendorData } = route.params;
    const { name, phone, email, rating } = vendorData;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.header}>Informações da Loja:</Text>
                <Text>Vendedor: {name}</Text>
                <Text>Telefone: {phone}</Text>
                <Text>Email: {email}</Text>
                <Text>Avaliação: {rating}/5</Text>
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
    header: {
        fontSize: 18,
        fontWeight: '700',
    },
});