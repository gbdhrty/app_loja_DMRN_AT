import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export function ProductSpecs({ route }) {
    const { name, price, technicalSpecifications } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.header}>Informações do Produto:</Text>
                <Text>{name}</Text>
                <Text>{price}</Text>
                <Text style={styles.boldText}>Especificações:</Text>
                <View style={styles.specsContainer}>
                    {technicalSpecifications.map((spec, index) => (
                        <Text key={`${name}_spec_${index}`}>{spec}</Text>
                    ))}
                </View>
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
    boldText: {
        fontWeight: '700',
    },
    specsContainer: {
        paddingHorizontal: 8,
    },
});