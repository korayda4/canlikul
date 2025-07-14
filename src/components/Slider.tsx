import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Slider: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Video
          source={require('../../assets/canli-slider.mp4')}
          style={styles.video}
          isLooping
          shouldPlay
          isMuted
          resizeMode='cover'
        />

        <LinearGradient
          colors={['rgba(236,110,43,0.6)', 'rgba(0,0,0,0.8)']}
          start={[0, 0]}
          end={[1, 0]}
          style={styles.gradientOverlay}
        />

        <View style={styles.content}>
          <Text style={styles.welcomeText}>CANLIKUL TURİZM’E HOŞGELDİNİZ.</Text>

          <View style={{ marginTop: 8 }}>
            <Text style={styles.title}>Manevi Yolculuğunuzda</Text>
            <Text style={styles.title2}>Güvenilir Rehberiniz!</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Hakkımızda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>İletişim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  container: {
    width: SCREEN_WIDTH - 32,
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
  },
  welcomeText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '400',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    marginTop: 2,
  },
  title2: {
    fontSize: 24,
    color: '#ec6e2b',
    fontWeight: '700',
    marginTop: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#ec6e2b',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Slider;
