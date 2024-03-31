import { FlatList, Pressable } from "react-native";
import { ProductCard } from "./ProductCard";

export function ProductsList({ products, action }) {
    const renderItem = ({ item }) => (
        <Pressable onPress={() => action(item)}>
            <ProductCard {...item} />
        </Pressable>
    );

    return (
        <FlatList 
            data={products}
            renderItem={renderItem}
            keyExtractor={(item, index) => `product_${index}`}
            showsVerticalScrollIndicator={false}
        />
    );
}