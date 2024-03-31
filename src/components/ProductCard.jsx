import { Image, StyleSheet, Text, View } from "react-native";

export function ProductCard({ name, image }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.img} />
            <Text style={styles.text}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        gap: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    img: {
        width: 100,
        height: 100,
    },
});