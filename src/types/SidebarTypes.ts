export interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

export interface DropdownItemProps {
  title: string;
  items: string[];
  onClose: () => void;
  description?: string;
}
