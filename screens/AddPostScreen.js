import { View, Text, StyleSheet } from 'react-native';

export default function AddPostScreen() {
  return (
    <View style={styles.container}>
      <Text>Add Post Screen</Text>
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
