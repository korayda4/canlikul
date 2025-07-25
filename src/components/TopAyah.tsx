import React from 'react';
import { useTopAyah } from '../hooks/UseTopAyah';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const TopAyah: React.FC = () => {
    const { data, isLoading } = useTopAyah();

    if (isLoading) {
        return (
            <View style={styles.loadingWrapper}>
                <ActivityIndicator
                    size="large"
                    color="#fff"
                    style={{ position: "absolute", top: "50%", left: "50%", transform: [{ translateX: -20 }, { translateY: -20 }] }}
                />
            </View>
        );
    }

    return (
        <LinearGradient
            colors={['#ffdb0fff', '#b6772fff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBorder}
        >
            <View style={styles.innerContent}>
                <Text style={styles.textTr}>
                    {data?.textTr || '﴾97﴿ Söyledikleri yüzünden canının sıkıldığını muhakkak ki biliyoruz.'}
                </Text>
                <Text style={styles.textAr}>
                    {data?.textAr || 'وَلَقَدْ نَعْلَمُ اَنَّكَ يَضٖيقُ صَدْرُكَ بِمَا يَقُولُونَۙ ﴿٩٧﴾'}
                </Text>
            </View>
        </LinearGradient>
    );
};

export default TopAyah;

const styles = StyleSheet.create({
    loadingWrapper: {
        padding: 16,
        marginHorizontal: 16,
        marginTop: 12,
        borderRadius: 16,
        minHeight: 120,
        backgroundColor: '#d1d1d1ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientBorder: {
        padding: 3, // Border kalınlığı
        borderRadius: 16,
        marginHorizontal: 16,
        marginTop: 12,
    },
    innerContent: {
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 16,
        alignItems: 'center',
    },
    textTr: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
        textAlign: 'center',
        color: '#1b1b1bff',
    },
    textAr: {
        fontSize: 12,
        color: '#ec6e2b',
        textAlign: 'center',
    },
});
