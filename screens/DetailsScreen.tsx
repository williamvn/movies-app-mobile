import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, StyleSheet, ScrollView, Linking } from 'react-native'
import { HeaderPoster } from '../components/HeaderPoster';
import { getYear } from '../helper/dateHelper';
import { RootStackParamList } from '../navigators/StackNavigator';
import { globalStyles } from '../theme/main';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from '../components/Badge';
import { useCastName } from '../hooks/useCast';
import CropedText from '../components/CropedText';
import { TouchableIcon } from '../components/TouchableIcon';
import { useMovieDetails } from '../hooks/useMovieDetails';

interface DetailsProps extends StackScreenProps<RootStackParamList, "Details"> { }

export const DetailsScreen = (props: DetailsProps) => {
  const movie = props.route.params;
  const { castNames } = useCastName(movie.id);
  const { movieDetails } = useMovieDetails(movie.id);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={globalStyles.container}>
        <View style={styles.container}>
          <HeaderPoster movie={movie} />
        </View>
        <View style={globalStyles.row}>
          <Text style={globalStyles.subtitle}>{getYear(movie.release_date)}</Text>
          <View style={styles.iconContainer}>
            <Icon style={styles.icon} name="film-outline" size={20} color={"white"} />
            <Icon style={styles.icon} name="heart-outline" size={20} color={"white"} />
          </View>
          <Badge title={movie.adult ? '18+' : "11+"} color={!movie.adult ? 'orange' : "#6FC3DF"} />
          <Badge title={movie.vote_average.toString()} color="#333333" />
        </View>
        <Text style={[globalStyles.paragraph, globalStyles.mv10]}>{movie.overview}</Text>
        <CropedText><Text style={{ fontWeight: "bold" }}>Cast: </Text>{castNames.join(", ")}</CropedText>
        <View style={styles.moviesActionButtons}>
          <TouchableIcon iconName="add-outline" title='My List' />
          <TouchableIcon iconName="play-outline" title='Watch' onPress={() => Linking.openURL(`https://www.imdb.com/title/${movieDetails?.imdb_id}`)} />
          <TouchableIcon iconName="heart-outline" title='Favorite' />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  iconContainer: {
    marginTop: 3,
    marginLeft: 20,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 3
  },
  moviesActionButtons: {
    marginTop: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
  }

});