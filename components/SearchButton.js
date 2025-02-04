import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchButton = () => {
  return (
    <View style={styles.searchButton}>
      <Ionicons name="search" size={24} color="#FFFFFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#666666',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default SearchButton;
