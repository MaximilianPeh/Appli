// Create new SearchScreen.js with basic search functionality
import { View, StyleSheet, TextInput } from 'react-native';
import { theme } from '../styles/theme';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={theme.colors.text.secondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.primary,
    borderWidth: 2,
    borderColor: 'red'
  },
  text: {
    color: theme.colors.text.primary,
  }
});