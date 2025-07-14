import { IconProps } from 'phosphor-react-native';

export type TabName = 'home' | 'about' | 'contact';

export interface NavbarProps {
  currentPage: TabName;
  onTabPress: (tab: TabName) => void;
}

export interface NavItemProps {
  Icon: React.ComponentType<IconProps>;
  isActive: boolean;
  onPress: () => void;
}
