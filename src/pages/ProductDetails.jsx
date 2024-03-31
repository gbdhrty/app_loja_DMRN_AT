import { Image, StyleSheet, Text, View, SafeAreaView } from "react-native";

export function ProductDetails({ route }) {
    const { image, name, description } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={{ uri: image }} style={styles.img} />
                <Text style={styles.title}>{name}</Text>
                <Text>{description}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        padding: 8,
        gap: 10,
    },
    img: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    }
});