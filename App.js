import React from 'react';
import { View, Text, FlatList, SectionList, TouchableOpacity, Alert, StyleSheet } from 'react-native';

// Dữ liệu sản phẩm cho FlatList
const products = [
  { id: '1', name: 'sản phẩm 1', price: '10.00' },
  { id: '2', name: 'sản phẩm 2', price: '15.00' },
  { id: '3', name: 'sản phẩm 3', price: '20.00' },
];

// Dữ liệu nhóm sản phẩm cho SectionList
const groupedProducts = [
  { title: 'Mục 1', data: ['sản phẩm 1', 'sản phẩm 1'] },
  { title: 'Mục 2', data: ['sản phẩm 1', 'sản phẩm 1'] },
  { title: 'Mục 3', data: ['sản phẩm 1', 'sản phẩm 1'] },
];

const App = () => {
  // Hàm xử lý khi bấm vào sản phẩm
  const handleProductPress = (productName) => {
    Alert.alert('Click', `Chọn: ${productName}`);
  };

  // Render item cho FlatList
  const renderItemFlatList = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => handleProductPress(item.name)}
    >
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  // Render item cho SectionList
  const renderItemSectionList = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => handleProductPress(item)}
    >
      <Text style={styles.productName}>{item}</Text>
    </TouchableOpacity>
  );

  // Render header cho SectionList
  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tiêu đề FlatList */}
      <Text style={styles.header}>FlatList</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItemFlatList}
      />

      {/* Tiêu đề SectionList */}
      <Text style={styles.header}>SectionList</Text>
      <SectionList
        sections={groupedProducts}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItemSectionList}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor:'#6699FF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  productItem: {
    padding: 10,
    backgroundColor: '#777',
    marginBottom: 5,
    borderRadius: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  sectionHeader: {
    backgroundColor: '#FFCCCC',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
