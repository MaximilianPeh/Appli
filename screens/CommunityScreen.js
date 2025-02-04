import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Community Screen</Text>
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
