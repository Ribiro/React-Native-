import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, FlatList, TouchableOpacity, View} from 'react-native';
import React, {useState} from "react";

export default function App() {
    const [people, setPeople] = useState([
        {name: 'first', id: '1'},
        {name: 'second', id: '2'},
        {name: 'third', id: '3'},
        {name: 'fourth', id: '4'},
        {name: 'fifth', id: '5'},
        {name: 'sixth', id: '6'},
        {name: 'seventh', id: '7'},
        {name: 'eight', id: '8'},
        {name: 'ninth', id: '9'},
        {name: 'tenth', id: '10'},
        {name: 'eleventh', id: '11'},
    ]);

    const pressHandler = (id) => {
        console.log(id);
        setPeople((prevPeople) =>{
            return prevPeople.filter(person => person.id !== id);
        })
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text style={styles.person}>{item.name}</Text>
                    </TouchableOpacity>
                )}/>

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
      fontSize: 24,
      marginHorizontal: 10,
  }
});
