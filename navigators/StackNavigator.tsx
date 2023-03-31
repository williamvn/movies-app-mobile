import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../screens/DetailsScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { MoviesScreen } from '../screens/MoviesScreen';
import { Movie } from '../types/MoviesDB';

export type RootStackParamList = {
  Movies: undefined,
  Details: Movie,
  Favorites: undefined
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}