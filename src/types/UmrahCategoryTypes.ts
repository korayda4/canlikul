import { ImageSourcePropType } from 'react-native';

export interface UmrahCategory {
  id: string;
  title: string;
  image: string | ImageSourcePropType; 
}

export interface UmrahCardProps {
  title: string;
  type: number;
  image: string | ImageSourcePropType;
  onPress?: () => void;
}

export interface UmrahCategoryAreaProps {
  categories: UmrahCategory[];
}

export type UmrahTourCardProps = {
  id: number;
  tourNumber: string;
  title: string;
  departureDate: string;
  passageDate: string;
  returnalDate: string;
  madinahHotel: string;
  mekkahHotel: string;
  twoPersonHotelPrice: number;
  threePersonHotelPrice: number;
  fourPersonHotelPrice: number;
  isServiceProvided: boolean;
  onWhatsAppPress?: () => void;
  onInstagramPress?: () => void;
  onDataPress?: () => void;
};


