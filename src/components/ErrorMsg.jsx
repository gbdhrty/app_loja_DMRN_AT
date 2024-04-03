import { Text, StyleSheet } from "react-native";

export function ErrorMsg({ msg }) {
    return (
        <Text style={styles.msg}>{msg}</Text>
    );
}

const styles = StyleSheet.create({
    msg: {
        fontSize: 16,
        color: 'red',
        fontWeight: '700',
        padding: 8,
    }
});