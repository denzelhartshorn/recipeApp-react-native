import React from "react";
import { View, Text } from "react-native";

const FilterScreen = propls => {
  return (
    <View syle={styles.screen}>
      <Text>The Filter Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
