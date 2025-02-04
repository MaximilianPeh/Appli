import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OfferExpanded = ({ itemName, description, rating, sellerName, onClose }) => {
  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.closeButton} 
        onPress={onClose}
      >
        <Ionicons name="close" size={24} color="#666" />
      </Pressable>
      <View style={styles.infoContainer}>
        <Text style={styles.itemName}>{itemName}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <Text style={styles.sellerName}>by {sellerName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%',
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
    margin: 0,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    padding: 8,
  },
  infoContainer: {
    padding: 16,
    paddingTop: 48,
    alignItems: 'flex-start',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
  },
  sellerName: {
    fontSize: 12,
    color: '#666',
  },
});

export default OfferExpanded;
