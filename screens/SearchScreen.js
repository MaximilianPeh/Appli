import { View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { theme } from '../styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search items..."
            placeholderTextColor={theme.colors.text.secondary}
          />
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
  },
  searchContainer: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.primary,
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: theme.colors.background.secondary,
    color: theme.colors.text.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius,
    fontSize: theme.typography.size.sm,
  },
  topShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 0,
  }
});