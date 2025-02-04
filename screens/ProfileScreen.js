import { View, Text, StyleSheet } from 'react-native';
import { userData } from '../data/userData';
import { theme } from '../styles/theme';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>username: {userData.username}</Text>
      <Text style={styles.text}>rating: {userData.rating}</Text>
      <Text style={styles.text}>followers: {userData.followers}</Text>
      <Text style={styles.text}>following: {userData.following}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.primary,
  },
  text: {
    color: theme.colors.text.primary,
  }
});
