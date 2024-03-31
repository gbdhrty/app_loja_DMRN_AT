import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomePage } from './src/pages/HomePage';
import { AboutPage } from './src/pages/AboutPage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ title: "Minha Loja" }}
        />
        <Drawer.Screen 
          name="AboutPage" 
          component={AboutPage} 
          options={{ title: "Sobre o App" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}