import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { userData } from '../data/userData';
import { theme } from '../styles/theme';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <View style={styles.profilePicture} />
          <View style={styles.userInfoContainer}>
            <Text style={styles.username}>{userData.username}</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>followers</Text>
                <Text style={styles.statNumber}>{userData.followers}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>following</Text>
                <Text style={styles.statNumber}>{userData.following}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.walletContainer, { marginTop: theme.spacing.xl }]} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    padding: 20,
    borderWidth: 2,
    borderColor: 'red',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
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
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
  statLabel: {
    fontSize: 12,
    color: theme.colors.text.primary,
    marginBottom: 4,
  },
  walletContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginTop: theme.spacing.md,
    marginHorizontal: theme.spacing.md,
    alignSelf: 'center'
  }
});
