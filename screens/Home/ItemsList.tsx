import React from "react";
import { FlatListProps, Text, View, StyleSheet, Button, FlatList } from "react-native";

// Omit - Constructs a type by picking all properties from Type and then removing Keys.
// Example below:

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };

interface Props extends Omit<FlatListProps<string>, "renderItem"> {
  onDeleteItem: (item: string) => void;
}

const Item = ({ value, onDeleteItem }: { value: string; onDeleteItem: (item: string) => void; }): JSX.Element => {
  return (
    <View style={styles.itemContainer}>
        <Text style={styles.item}>{value}</Text>
        <Button
        title="X"
        onPress={() => onDeleteItem(value)}
        color="red"
        testID="cell-delete"
        />
    </View>
  );
};

const ItemsList = (props: Props): JSX.Element => {
  const {data, onDeleteItem} = props;
  return (
    <FlatList
      testID="list"
      keyExtractor={(i) => i}
      data={data}
      renderItem={({item}) => <Item value={item} onDeleteItem={onDeleteItem} />}
    />
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: '#cccc',
    borderWidth: StyleSheet.hairlineWidth,
    height: 60,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  item: {
    fontSize: 20,
  },
});