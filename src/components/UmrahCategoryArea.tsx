import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import UmrahCard from './UmrahCard';
import { UmrahCategoryAreaProps } from '../types/UmrahCategoryTypes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootTypes';

const UmrahCategoryArea: React.FC<UmrahCategoryAreaProps> = ({ categories }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { width } = useWindowDimensions();

  const numColumns = 2;
  const CARD_MARGIN = 8;
  const cardWidth = (width - CARD_MARGIN * (numColumns * 2) - 24) / numColumns;

  const renderItem = ({ item, index }: { item: typeof categories[0]; index: number }) => (
    <View style={[styles.cardWrapper, { width: cardWidth }]}>
      <UmrahCard
        key={item.id}
        type={index}
        image={item.image}
        title={item.title}
        onPress={() => {
          navigation.navigate('UmrahCategoryScreen', { type: index });
        }}
      />
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingBottom: 100,
  },
  cardWrapper: {
    margin: 8,
  },
});

export default UmrahCategoryArea;
