/* @flow */

import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation'; // 1.0.0-beta.21

const Banner = () => (
  <SafeAreaView
    style={styles.bannerContainer}
    forceInset={{ vertical: 'never' }}
  >
    <View style={styles.banner}>
      <Text style={styles.title}>SUPERMARKET FINDER</Text>
    </View>
  </SafeAreaView>
);

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#5E412F',
  },
  banner: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#FCEBB6',
    margin: 8,
  },
});
