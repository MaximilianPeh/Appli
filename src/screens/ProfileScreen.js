import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { userData } from '../data/userData';
import { theme } from '../styles/theme';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.profileHeader}>
            <Image 
              source={require('../../assets/profileImage.png')}
              style={styles.profilePicture}
              resizeMode="cover"
            />
            <View style={styles.userInfoContainer}>
              <Text style={styles.username}>{userData.username}</Text>
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>followers</Text>
                  <Text style={styles.statNumber}>{3012}</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>following</Text>
                  <Text style={styles.statNumber}>{7583}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.walletContainer, { marginTop: theme.spacing.xl }]}>
            <Ionicons name="wallet-outline" size={48} color={'orange'} />
            <View>
              <Text style={styles.walletLabel}>Balance: <Text style={{color: theme.colors.primary, fontWeight: 'bold'}}>400 points</Text></Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.walletNumber}>Rating: </Text>
                <View style={styles.starsContainer}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Ionicons name="star-outline" size={16} color="#FFD700" />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.qrCodeContainer}>
            <Image 
              source={require('../../assets/qrcode.png')}
              style={styles.qrCode}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    padding: theme.spacing.md,
    gap: theme.spacing.md, 
    // borderWidth: 2,
    // borderColor: 'red',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.lg,
  },
  profilePicture: {
    width: '25%',
    aspectRatio: 1,
    borderRadius: 9999,
    borderWidth: 3,
    borderColor: 'white',
  },
  userInfoContainer: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 26
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-start',
  },
  statItem: {
    alignItems: 'center',
    color: 'black'
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  statLabel: {
    fontSize: 12,
    color: theme.colors.text.primary,
    marginBottom: 4,
  },
  walletLabel: {
    fontSize: 18,
    color: 'black',
    marginBottom: 4,
  },
  walletNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  walletContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    borderRadius: theme.borderRadius,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
    gap: 40
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
  qrCodeContainer: {
    backgroundColor: 'white',
    width: '75%',
    aspectRatio: 1,
    borderRadius: theme.borderRadius,
    alignSelf: 'center',
    padding: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  qrCode: {
    width: '80%',
    height: '80%',
  },
});
