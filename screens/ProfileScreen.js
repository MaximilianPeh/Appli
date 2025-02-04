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
                <Text style={styles.statNumber}>{userData.points}</Text>
                <Text style={styles.statLabel}>points</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{userData.followers}</Text>
                <Text style={styles.statLabel}>followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{userData.following}</Text>
                <Text style={styles.statLabel}>following</Text>
              </View>
            </View>
          </View>
        </View>
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
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#3B82F6', // Blue circle
  },
  userInfoContainer: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
    marginBottom: 8,
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
    fontSize: 14,
    color: theme.colors.text.primary,
  },
});
