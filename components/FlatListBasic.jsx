import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1 },
  item: { padding: 10, fontSize: 18, height: 44, },
});

export default function FlatListBasic() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 40, padding: 15, margin: 30,
        fontWeight: "bold"
      }}>내가 좋아하는 과일</Text>
      <FlatList
        data={[
          { key: 'Apple' },
          { key: 'Banana' },
          { key: 'Cherry' },
          { key: 'Mango' },
          { key: 'Orange' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}
