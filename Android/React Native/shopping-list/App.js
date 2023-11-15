import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "react-native-vector-icons";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([
        ...items,
        { name: newItem, purchased: false, quantity: quantity },
      ]);
      setNewItem("");
      setQuantity("1");
    }
  };

  const handleToggleItem = (index) => {
    const updatedItems = [...items];
    const toggledItem = updatedItems.splice(index, 1)[0];
    toggledItem.purchased = !toggledItem.purchased;
    if (toggledItem.purchased) {
      updatedItems.push(toggledItem);
    } else {
      updatedItems.unshift(toggledItem);
    }
    setItems(updatedItems);
  };

  const handleClearList = () => {
    setItems([]);
  };

  const totalItems = items.length;
  const purchasedItems = items.filter((item) => item.purchased).length;
  const remainingItems = totalItems - purchasedItems;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter an item"
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />
        <TextInput
          style={styles.quantityInput}
          placeholder="Qty"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
        />
        <TouchableOpacity style={styles.trashIcon} onPress={handleClearList}>
          <FontAwesome name="trash" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.summary}>
        Total Items: {totalItems} | Purchased Items: {purchasedItems} |
        Remaining Items: {remainingItems}
      </Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => handleToggleItem(index)}
            style={item.purchased ? styles.purchasedItem : styles.item}
          >
            <View style={styles.itemRow}>
              <Text
                style={[
                  styles.itemName,
                  item.purchased && styles.purchasedText,
                ]}
              >
                {item.name}
              </Text>
              <Text
                style={[
                  styles.quantity,
                  item.purchased && styles.purchasedText,
                ]}
              >
                {item.quantity}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 35,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 5,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  quantityInput: {
    width: 50,
    borderWidth: 1,
    marginRight: 5,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  trashIcon: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ff0000",
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Center vertically
  },
  itemName: {
    fontSize: 16,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666666"
  },
  purchasedItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    backgroundColor: "#ffcccb",
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  summary: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 10,
    color: "#666666"
  },
  purchasedText: {
    color: "#b3b3b3",
    textDecorationLine: "line-through",
  },
});
