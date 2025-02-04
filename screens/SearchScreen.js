// Create new SearchScreen.js with basic search functionality
import { View, StyleSheet, SafeAreaView, Text} from 'react-native';
import { theme } from '../styles/theme';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Search Screen</Text>
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