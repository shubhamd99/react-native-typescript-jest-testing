import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ItemAdder from "../../components/ItemAdder";
import ItemsList from "./ItemsList";

const Home = (): JSX.Element => {
    const [items, setItems] = useState<string[]>([]);

    return (
    <View style={styles.root}>
      <ItemAdder
        onAddItem={(item) => {
          if (item.trim().length > 0 && !items.includes(item)) {
            setItems([...items, item]);
          }
        }}
        testID="adder"
      />
      <ItemsList
        data={items}
        onDeleteItem={(item) => {
          const index = items.indexOf(item);
          const itemsArr = items.slice();
          itemsArr.splice(index, 1);
          setItems(itemsArr);
        }}
      />
    </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    root: {
      backgroundColor: '#fff',
      flex: 1,
    },
});