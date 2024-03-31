import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { CommentCard } from "../components/CommentCard";

export function CommentsPage({ route }) {
    const { name, comments } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {comments.map((comment, index) => (
                    <CommentCard key={`${name}_comment_${index}`} {...comment} />
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