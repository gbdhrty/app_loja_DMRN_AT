import { StyleSheet, Text, View } from "react-native";

export function CommentCard({ user, date, comment, rating }) {
    function formatedDate() {
        const dateArray = date.split('-');
        const year = dateArray[0];
        const month = dateArray[1];
        const day = dateArray[2];
        const formatedDate = `${day}/${month}/${year}`;

        return formatedDate;
    }

    return (
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Text>
                    Comentário de <Text style={{ fontWeight: '700' }}>{user}:</Text>
                </Text>
                <Text style={styles.date}>{formatedDate()}</Text>
            </View>
            <Text style={styles.comment}>{comment}</Text>
            <Text>Avaliação: {rating}/5</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        gap: 4,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    date: {
        fontSize: 12,
        color: '#868687',
    },
    comment: {
        fontSize: 16,
    },
});