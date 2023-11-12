import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faTrash,
  faPlus,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [birthdays, setBirthdays] = useState([]);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const fetchBirthdays = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const birthdayData = await AsyncStorage.multiGet(keys);
      const parsedBirthdays = birthdayData.map(([key, value]) => {
        const parsedValue = JSON.parse(value);
        parsedValue.key = key; // Include the key for easy deletion
        return parsedValue;
      });
      setBirthdays(parsedBirthdays);
    } catch (error) {
      console.error("Error fetching birthdays:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchBirthdays();
    }, [])
  );

  const calculateDaysUntilBirthday = (birthday) => {
    const today = new Date();
    const birthdayDate = new Date(birthday.date);
    birthdayDate.setFullYear(today.getFullYear()); // Set the year to the current year

    // Calculate the difference in days
    const timeDifference = birthdayDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference >= 0 ? daysDifference : daysDifference + 365; // Consider the next year if the birthday has passed
  };

  const calculateAge = (birthday) => {
    const today = new Date();
    const birthdayDate = new Date(birthday.date);
    const age = today.getFullYear() - birthdayDate.getFullYear();

    // Adjust age if the birthday hasn't occurred yet this year
    if (
      today.getMonth() < birthdayDate.getMonth() ||
      (today.getMonth() === birthdayDate.getMonth() &&
        today.getDate() < birthdayDate.getDate())
    ) {
      return age - 1;
    }

    return age;
  };

  const deleteBirthday = async (key) => {
    try {
      // Remove the birthday from AsyncStorage
      await AsyncStorage.removeItem(key);

      // Update the state to reflect the changes
      setBirthdays((prevBirthdays) =>
        prevBirthdays.filter((birthday) => birthday.key !== key)
      );

      // If the deleted birthday was selected, remove it from selectedItems
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem.key !== key)
      );
    } catch (error) {
      console.error("Error deleting birthday:", error);
    }
  };

  const confirmDelete = (key) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this birthday?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => deleteBirthday(key),
        },
      ],
      { cancelable: false }
    );
  };

  const toggleSelectionMode = () => {
    setSelectionMode(!selectionMode);
    setSelectedItems([]); // Clear selected items when toggling mode
  };

  const toggleSelectItem = (key) => {
    // Toggle selection of the item
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(key)) {
        // Item is already selected, remove it
        return prevSelectedItems.filter((selectedItem) => selectedItem !== key);
      } else {
        // Item is not selected, add it
        return [...prevSelectedItems, key];
      }
    });
  };

  const deleteSelectedBirthdays = () => {
    // Delete all selected birthdays
    selectedItems.forEach((key) => deleteBirthday(key));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, selectionMode && styles.selectionModeCard]}
      onPress={() => (selectionMode ? toggleSelectItem(item.key) : null)}
    >
      {selectionMode && (
        <TouchableOpacity
          style={styles.selectionCheckbox}
          onPress={() => toggleSelectItem(item.key)}
        >
          {selectedItems.includes(item.key) && (
            <View style={styles.selectedIndicator} />
          )}
        </TouchableOpacity>
      )}
      <Image source={{ uri: item.imageUri }} style={styles.thumbnail} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.daysUntilBirthday}>
          {calculateDaysUntilBirthday(item)} days until birthday
        </Text>
        <Text style={styles.age}>{calculateAge(item)} years old</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Birthdays</Text>
      <TouchableOpacity
        style={[
          styles.selectButton,
          selectionMode ? styles.cancelButton : styles.selectModeButton,
        ]}
        onPress={toggleSelectionMode}
      >
        <FontAwesomeIcon
          icon={selectionMode ? faTimes : faCheck}
          style={styles.buttonIcon}
        />
        <Text style={styles.selectButtonText}>
          {selectionMode ? "Cancel" : "Select"}
        </Text>
      </TouchableOpacity>
      {birthdays.length > 0 ? (
        <FlatList
          data={birthdays}
          renderItem={renderItem}
          keyExtractor={(item) => item.date}
        />
      ) : (
        <Text>No upcoming birthdays</Text>
      )}

      {selectionMode && selectedItems.length > 0 && (
        <TouchableOpacity
          style={styles.deleteSelectedButton}
          onPress={deleteSelectedBirthdays}
        >
          <FontAwesomeIcon icon={faTrash} style={styles.trashIcon} />
        </TouchableOpacity>
      )}

      {/* Plus Button */}
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => navigation.navigate("AddBirthday")}
      >
        <FontAwesomeIcon icon={faPlus} style={styles.plusButtonText} />
      </TouchableOpacity>
    </View>
  );
};

const colors = {
  background: "#282a36", // Dark background color
  card: "#44475a", // Card background color
  primary: "#8be9fd", // Primary color for headings and buttons
  secondary: "#50fa7b", // Secondary color for select mode
  danger: "#ff5555", // Danger color for cancel mode
  text: "#f8f8f2", // Text color
  border: "#6272a4", // Border color
  accent: "#ff79c6", // Accent color for days until birthday
  deleteButton: "#ff5555", // Delete button color
  iconColor: "#6272a4", // Dark color inspired by Dracula theme
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
    paddingTop: 50,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 16,
    color: colors.primary,
    backgroundColor: colors.background, // Use the background color from colors object
    padding: 16,
    textAlign: "center",
    borderRadius: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 16,
    justifyContent: "center",
  },
  selectModeButton: {
    backgroundColor: colors.secondary,
  },
  cancelButton: {
    backgroundColor: colors.danger,
  },
  selectButtonText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 16,
  },
  buttonIcon: {
    color: "#fff",
    fontSize: 20,
    marginRight: 8,
  },
  selectionModeCard: {
    backgroundColor: "#44475a",
  },
  selectionCheckbox: {
    marginRight: 8,
  },
  selectedIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.accent,
  },
  deleteButton: {
    backgroundColor: colors.deleteButton,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 8,
  },
  deleteButtonText: {
    color: "#fff",
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 16,
    borderWidth: 5,
    borderColor: colors.border,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
  date: {
    fontSize: 14,
    color: colors.border,
  },
  daysUntilBirthday: {
    fontSize: 14,
    color: colors.accent,
  },
  age: {
    fontSize: 14,
    color: colors.border,
  },
  bottomActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  deleteSelectedButton: {
    backgroundColor: colors.deleteButton,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  trashIcon: {
    color: "#fff",
  },
  plusButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 30,
  },
  plusButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;
