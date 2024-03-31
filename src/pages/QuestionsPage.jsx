import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { QuestionCard } from "../components/QuestionCard";

export function QuestionsPage({ route }) {
    const { name, questions } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {questions.map((question, index) => (
                    <QuestionCard key={`${name}_question_${index}`} {...question} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});