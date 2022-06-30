import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/bengalcat.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Bengal Cat</AppText>
        <AppText style={styles.subTitle}>
          The Bengal cat is the only domestic breed of cat that has rosette
          markings.
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    paddingTop: 20,
    width: '100%',
    height: 400,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
});
export default ListingDetailsScreen;
