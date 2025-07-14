import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { CaretRight } from 'phosphor-react-native';
import { UmrahCardProps } from '../types/UmrahCategoryTypes';

const UmrahCard: React.FC<UmrahCardProps> = ({
  imageSource,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.card} onPress={onPress}>
      <ImageBackground source={imageSource} style={styles.image} resizeMode="cover">
        <View style={styles.gradientOverlay} />

        <View style={styles.topRightContainer}>
          <Text style={styles.testText}>{title}</Text>

          <TouchableOpacity style={styles.detailsButton} activeOpacity={0.7}>
            <Text style={styles.detailsButtonText}>Detaylar</Text>
            <CaretRight size={16} color="#000" weight="bold" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  topRightContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'column',
    alignItems: 'flex-end',
    zIndex: 10,
  },
  testText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  detailsButtonText: {
    color: '#000',
    fontWeight: '600',
    marginRight: 6,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default UmrahCard;
