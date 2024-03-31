import { StyleSheet, Text, View } from "react-native";

export function QuestionCard({ user, date, question, answer }) {
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
                    Pergunta de <Text style={styles.boldText}>{user}:</Text>
                </Text>
                <Text style={styles.date}>{formatedDate()}</Text>
            </View>
            <Text>{question}</Text>
            <Text style={styles.boldText}>Resposta:</Text>
            <Text>{answer}</Text>
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
    boldText: {
        fontWeight: '700',
    },
    date: {
        fontSize: 12,
        color: '#868687',
    },
    comment: {
        fontSize: 16,
    },
});