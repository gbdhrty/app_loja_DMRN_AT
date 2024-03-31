import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsPage } from "./ProductsPage";
import { ProductDetailsPage } from "./ProductDetailsPage";

const Stack = createNativeStackNavigator();

export function HomePage() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Products" 
                component={ProductsPage} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Details" 
                component={ProductDetailsPage}
                options={{ headerTitle: 'Detalhes' }}
            />
        </Stack.Navigator>
    );
}