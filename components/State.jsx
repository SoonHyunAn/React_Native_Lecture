import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";

export default function State({ name }) {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Image
        source={require('../assets/img/Cats.jpg')}
        style={{ width: 300, borderRadius: 20, padding: 10 }} // px 없어도된다.
      >
      </Image>
      <Text>
        I am {name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button // click대신 press사용
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? '제발 우유를 주세요' : '감사합니다'}
      />
    </View>
  );
}
