import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProductDetails } from "./ProductDetails";
import { ProductSpecs } from "./ProductSpecs";
import { SellerInfoPage } from "./SellerInfoPage";
import { CommentsPage } from "./CommentsPage";
import { QuestionsPage } from "./QuestionsPage";

const Tab = createBottomTabNavigator();

export function ProductDetailsPage({ route }) {
    const { product } = route.params;

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="ProductDetails" 
                component={ProductDetails}
                initialParams={{ ...product }}
                options={{ 
                    headerShown: false, 
                    title: "Detalhes"
                }}
            />
            <Tab.Screen 
                name="ProductSpecs" 
                component={ProductSpecs}
                initialParams={{ ...product }}
                options={{ 
                    headerShown: false,
                    title: "Especificações"
                }}
            />
            <Tab.Screen 
                name="SellerInfo" 
                component={SellerInfoPage}
                initialParams={{ ...product }}
                options={{ 
                    headerShown: false,
                    title: "Vendedor"
                }}
            />
            <Tab.Screen 
                name="Comments" 
                component={CommentsPage}
                initialParams={{ ...product }}
                options={{ 
                    headerShown: false,
                    title: "Comentários"
                }}
            />
            <Tab.Screen 
                name="Questions" 
                component={QuestionsPage}
                initialParams={{ ...product }}
                options={{ 
                    headerShown: false,
                    title: "Perguntas"
                }}
            />
        </Tab.Navigator>
    );
}