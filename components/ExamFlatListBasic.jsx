import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, display: 'flex', justifyContent: "center", alignItems: "center" },
  item: { padding: 10, fontSize: 18, height: 44, },
  list: { padding: 20, height: 40, width: 200, borderColor: 'gray', borderWidth: 1, }
});

export default function ExamFlatListBasic() {
  const [fruitInput, setFruitInput] = useState('');
  const [fruits, setFruits] = useState([{ key: '사과' }, { key: '복숭아' }, { key: '수박' },]);

  const handleAddFruit = () => {
    if (fruitInput.trim() !== '') {
      setFruits([...fruits, { key: fruitInput }]);
      setFruitInput('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.list}
        placeholder="과일 이름을 입력하세요."
        value={fruitInput}
        onChangeText={(text) => setFruitInput(text)}
      />
      <br />
      <Button
        title="추가하기"
        onPress={handleAddFruit}
      />
      <FlatList
        data={fruits}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

