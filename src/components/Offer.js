import { View, Text, StyleSheet, Image, Animated, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../styles/theme';

const Offer = ({ itemName, rating, sellerName, points, imageURL }) => {
  // Generate a random height between 200 and 400 pixels for more variation
  const randomHeight = useMemo(() => {
    return Math.floor(Math.random() * (340 - 200 + 1)) + 200;
  }, []); // Empty dependency array ensures the height stays constant during re-renders

  const scaleAnim = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 20
    }).start();
  };

  const onPressOut = async () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30
    }).start();

    try {
      const response = await fetch('https://f4e5-128-59-176-236.ngrok-free.app/put_borrow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemName,
          sellerName,
          points,
          rating,
          imageURL
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit borrow request');
      }

      const data = await response.json();
      console.log('Borrow request successful:', data);
    } catch (error) {
      console.error('Error submitting borrow request:', error);
      // You might want to add error handling UI feedback here
    }
  };

  return (
    <View style={[styles.container, { height: randomHeight }]}>
      {imageURL && (
        <Image
          source={{ uri: imageURL }}
          style={[styles.image, { height: randomHeight }]}
        />
      )}
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.2)']}
        style={[styles.innerShadow, { height: randomHeight * 0.25 }]} // 25% of container height
      />
      <View style={styles.infoContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.itemName}>{itemName}</Text>
          <Text style={styles.points}>{points} points</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={12} color="#FFD700" />
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <Text style={styles.sellerName}>by {sellerName}</Text>
        </View>
        <Pressable 
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          style={borrowButtonStyles.buttonContainer}
        >
          <Animated.View 
            style={[
              borrowButtonStyles.button, 
              { transform: [{ scale: scaleAnim }] }
            ]}
          >
            <Text style={borrowButtonStyles.text}>Borrow</Text>
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.primary, // the default blue
    borderRadius: theme.borderRadius,
    justifyContent: 'flex-end', // Align content to bottom
    // borderWidth: 1,
    // borderColor: 'red'
  },
  infoContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'relative',
    paddingBottom: 0,
  },
  contentContainer: {
    gap: theme.spacing.xs,
    alignItems: 'flex-start',
  },
  itemName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
    color: theme.colors.text.primary,
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1
    }
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 10,
    color: theme.colors.text.primary,
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1
    }
  },
  sellerName: {
    fontSize: 9,
    color: theme.colors.text.primary,
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1
    },
    paddingBottom: 10
  },
  innerShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  points: {
    fontSize: 10,
    color: theme.colors.text.primary,
    marginTop: 2,
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1
    }
  },
  image: {
    position: 'absolute',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: theme.borderRadius,
  },
});

const borrowButtonStyles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingBottom: 8,
    paddingRight: 8,
  },
  button: {
    backgroundColor: theme.colors.primary, 
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius,
    alignItems: 'center',
  },
  text: {
    color: theme.colors.text.primary,
    fontWeight: 'bold',
    fontSize: theme.typography.size.sm,
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1
    }
  },
});

export default Offer;
