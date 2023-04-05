import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, globalStyles } from '../theme/main';
import { DrawerComponent } from '../components/DrawerComponent';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerComponent} screenOptions={({ navigation }) => ({ headerTransparent: true, headerTitle: '', headerLeft: () => <Icon onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 20 }} name={"menu"} size={30} color={colors.contrast.color} /> })} >
            <Drawer.Screen name="MoviesStack" component={StackNavigator} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        </Drawer.Navigator>
    );
}