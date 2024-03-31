import { useEffect, useState } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { ProductsList } from "../components/ProductsList";

export function ProductsPage({ navigation }) {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const onPressProduct = (product) => {
        navigation.navigate("Details", { product });
    }

    useEffect(() => {
        async function loadProducts() {
            const url = 'https://gist.githubusercontent.com/gbdhrty/de13858913e826decbe1ffdfb234e121/raw/6a63be5456900c48656557de044132f774f1bc3e/products.json';
            const request = await fetch(url);
            const productsJson = await request.json();
            setProducts(productsJson);
            setIsLoading(false);
        }
        loadProducts();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading && 
                <ActivityIndicator 
                    size="large" 
                    style={styles.activityIndicator} 
                />
            }
            {products && <ProductsList products={products} action={onPressProduct} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    activityIndicator: {
        flex: 1,
    },
});