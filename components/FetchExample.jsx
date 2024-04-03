import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

export default function FetchExample() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(res => res.json()).then(obj => {
        console.log(obj);   // {title, releaseYear}
        setData(obj.movies);
      })
      .catch(error => { console.error(error); })
      .finally(setLoading(false));
  }, [])

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({ item }) => (<Text>{item.title}, {item.releaseYear} </Text>)}
        />
      )}
    </View>
  );
}
