import { ImageSourcePropType } from 'react-native';

export interface UmrahCategory {
  id: string;
  title: string;
  image: ImageSourcePropType; // require veya uri için
}

export interface UmrahCardProps {
  imageSource: ImageSourcePropType;
  title: string;
  onPress?: () => void;
}

export interface UmrahCategoryAreaProps {
  categories: UmrahCategory[];
}
