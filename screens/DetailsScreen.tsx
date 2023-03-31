import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { HeaderPoster } from '../components/HeaderPoster';
import { getYear } from '../helper/dateHelper';
import { RootStackParamList } from '../navigators/StackNavigator';
import { globalStyles } from '../theme/main';


interface DetailsProps extends StackScreenProps<RootStackParamList, "Details"> { }

export const DetailsScreen = (props: DetailsProps) => {
  const movie = props.route.params;


  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <HeaderPoster movie={movie} />
      </View>
      <Text style={globalStyles.subtitle}>{getYear(movie.release_date)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});