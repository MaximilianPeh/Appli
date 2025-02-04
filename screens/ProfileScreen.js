import { View, Text, StyleSheet } from 'react-native';
import { userData } from '../data/userData';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>username: {userData.username}</Text>
      <Text>rating: {userData.rating}</Text>
      <Text>followers: {userData.followers}</Text>
      <Text>following: {userData.following}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
