import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const colors = ["green", "blue", "brown", "yellow", "red", "black"];

export default function App() {
  const [bgColor, setBgColor] = useState("green");

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>{bgColor.toUpperCase()}</Text>
      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[styles.button, { backgroundColor: color }]}
          onPress={() => setBgColor(color)}
        >
          <Text style={styles.buttonText}>{color.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 30, marginBottom: 20, color: "white", fontWeight: "bold" },
  button: { width: "80%", padding: 10, margin: 5, alignItems: "center" },
  buttonText: { color: "white", fontSize: 20, fontWeight: "bold" },
});