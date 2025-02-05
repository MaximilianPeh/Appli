import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../styles/theme';

const Offer = ({ itemName, rating, sellerName }) => {
  // Generate a random height between 140 and 320 pixels for more variation
  const randomHeight = useMemo(() => {
    return Math.floor(Math.random() * (320 - 140 + 1)) + 140;
  }, []); // Empty dependency array ensures the height stays constant during re-renders

  return (
    <View style={[styles.container, { height: randomHeight }]}>
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.2)']}
        style={[styles.innerShadow, { height: randomHeight * 0.25 }]} // 25% of container height
      />
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
    backgroundColor: theme.colors.primary, // the default blue
    borderRadius: theme.borderRadius,
    margin: 8,
    justifyContent: 'flex-end', // Align content to bottom
    borderWidth: 1
  },
  infoContainer: {
    padding: 8,
    alignItems: 'flex-start', // Align content to left
  },
  itemName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
    color: theme.colors.text.primary
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 10,
    color: theme.colors.text.primary
  },
  sellerName: {
    fontSize: 9,
    color: theme.colors.text.primary
  },
  innerShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default Offer;
