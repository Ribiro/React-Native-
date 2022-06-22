import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, ScrollView, View} from 'react-native';
import React, {useState} from "react";

export default function App() {
    const [people, setPeople] = useState([
        {name: 'first', key: '1'},
        {name: 'second', key: '2'},
        {name: 'third', key: '3'},
        {name: 'fourth', key: '4'},
        {name: 'fifth', key: '5'},
        {name: 'sixth', key: '6'},
        {name: 'seventh', key: '7'},
        {name: 'eight', key: '8'},
        {name: 'ninth', key: '9'},
        {name: 'tenth', key: '10'},
        {name: 'eleventh', key: '11'},
    ]);

    return (
        <View style={styles.container}>

            {/*Using a ScrollView Component*/}
            <ScrollView>
                {people.map(person => (
                        <View key={person.key}>
                            <Text style={styles.person}>{person.name}</Text>
                        </View>
                ))}
            </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
      paddingTop: 40,
      paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  person: {
      marginTop: 24,
      marginBottom: 20,
      padding: 20,
      backgroundColor: 'grey',
      fontSize: 24
  }
});
