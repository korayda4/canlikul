import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import UmrahCard from './UmrahCard';
import { UmrahCategoryAreaProps } from '../types/UmrahCategoryTypes';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const UmrahCategoryArea: React.FC<UmrahCategoryAreaProps> = ({ categories }) => {

  const renderItem = ({ item }: { item: typeof categories[0] }) => (
    <View style={styles.cardWrapper}>
      <UmrahCard
        imageSource={item.image}
        title={item.title}
        onPress={() => {}}
      />
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={1} // flexbox ile sarmalıyoruz, FlatList sadece scroll işini yapacak
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',   // alt satıra kaydırır
    justifyContent: 'center', // ortalar
    paddingHorizontal: 12,
    marginTop: 16,
  },
  cardWrapper: {
    minWidth: 350,
    flex: 1,
    marginHorizontal: 8,
  },
});

export default UmrahCategoryArea;
