import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMemo } from 'react';

const Offer = ({ itemName, rating, sellerName }) => {
  // Generate a random height between 140 and 320 pixels for more variation
  const randomHeight = useMemo(() => {
    return Math.floor(Math.random() * (320 - 140 + 1)) + 140;
  }, []); // Empty dependency array ensures the height stays constant during re-renders

  return (
    <View style={[styles.container, { height: randomHeight }]}>
      <View style={styles.infoContainer}>
        <Text style={styles.itemName}>{itemName}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={12} color="#FFD700" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <Text style={styles.sellerName}>by {sellerName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 8,
    justifyContent: 'flex-end', // Align content to bottom
  },
  infoContainer: {
    padding: 8,
    alignItems: 'flex-start', // Align content to left
  },
  itemName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 10,
    color: '#666',
  },
  sellerName: {
    fontSize: 9,
    color: '#666',
  },
});

export default Offer;
