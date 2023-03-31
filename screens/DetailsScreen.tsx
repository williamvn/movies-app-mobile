import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { HeaderPoster } from '../components/HeaderPoster';
import { getYear } from '../helper/dateHelper';
import { RootStackParamList } from '../navigators/StackNavigator';
import { globalStyles } from '../theme/main';
import Icon from 'react-native-vector-icons/Ionicons';


interface DetailsProps extends StackScreenProps<RootStackParamList, "Details"> { }

export const DetailsScreen = (props: DetailsProps) => {
  const movie = props.route.params;

  return (
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
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{"+16"}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  iconContainer: {
    marginTop: 3,
    marginLeft: 20,
    flexDirection: 'row'
  },
  icon: {
    marginLeft: 3
  },
  badge: {
    marginLeft: 5,
    backgroundColor: "orange",
    borderRadius: 5,
    paddingHorizontal: 4,
    justifyContent: 'center',
    height: 20,
    marginTop: 3
  },
  badgeText: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold"
  }
});