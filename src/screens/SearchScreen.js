import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { theme } from '../styles/theme';
import React from 'react';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search offers..."
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchInput}
            inputStyle={{ color: theme.colors.text.primary }}
            placeholderTextColor={theme.colors.text.secondary}
          />
          <Text style={styles.searchText}>
            You typed: {searchQuery}
          </Text>
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
  searchText: {
    color: theme.colors.text.primary,
    marginTop: theme.spacing.sm,
    fontSize: theme.typography.size.md,
    textAlign: 'center',
  },
});