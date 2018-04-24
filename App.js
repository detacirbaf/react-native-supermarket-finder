import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import getDirections from 'react-native-google-maps-directions' // 1.1.2

import Banner from './components/Banner'
import Stores from './assets/Stores.json'

import "@expo/vector-icons"; // 6.2.0

export default class gmapsDirections extends Component {
 
  handleGetDirections = (lat, long) => {
    const data = {
      destination: {
        latitude: lat,
        longitude: long,
      },
      params: [{key: "dirflg", value: "b"}]
    }
    getDirections(data)
  }
 
  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
      <Banner />
      {Stores.stores.map((store) => (
      <TouchableOpacity
        key={store.name}
        onPress={() => {
          this.handleGetDirections(store.lat, store.long)

        }}
      >
        <SafeAreaView
          style={styles.itemContainer}
          forceInset={{ vertical: 'never' }}
        >
          <View style={styles.item}>
            <Text style={styles.title}>({store.points}) {store.name}</Text>
            <Text style={styles.description}>
              {store.address}
            </Text>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    ))}
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});
