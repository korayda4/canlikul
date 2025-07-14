import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { List } from 'phosphor-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <LinearGradient
        colors={['#af3d00ff', '#000']} 
        start={{ x: 0, y: 0 }}    
        end={{ x: 1, y: 0 }}     
        style={styles.container}
      >
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
          <List size={32} weight="bold" color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      <Sidebar isVisible={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  menuButton: {
    padding: 8,
  },
});

export default Header;
