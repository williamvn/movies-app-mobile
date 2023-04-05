import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, globalStyles } from '../theme/main';
import { DrawerComponent } from '../components/DrawerComponent';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

    const getScreenOptions = ({ navigation, route }: any): DrawerNavigationOptions => {
        const title = route.name === "Favorites" ? "Favorites" : "";
        const headerTitle = () => <Text style={globalStyles.text2}>{title}</Text>;
        const headerLeft = () => <Icon onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 20 }} name={"menu"} size={30} color={colors.contrast.color} />;
        return ({ headerTransparent: true, headerTitle, headerLeft })
    }

    return (
        <Drawer.Navigator drawerContent={DrawerComponent} screenOptions={(props) => getScreenOptions(props)} >
            <Drawer.Screen name="MoviesStack" component={StackNavigator} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        </Drawer.Navigator>
    );
}