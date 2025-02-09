import { View, StyleSheet, ScrollView, SafeAreaView, Pressable, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Offer from '../components/Offer';
import { theme } from '../styles/theme';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
  const [offers, setOffers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchOffers = async () => {
    try {
      const response = await fetch('https://128d-128-59-176-236.ngrok-free.app//get_all_offers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch offers');
      }

      const data = await response.json();
      setOffers(data);
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []); // Empty dependency array means this runs once when component mounts

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchOffers();
    console.log("Refreshed!");
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      {/* Top shadow */}
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
        style={styles.topShadow}
        pointerEvents="none"
      />
      
      <ScrollView 
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#ffffff" // This makes the loading spinner white
          />
        }
      >
        <View style={styles.grid}>
          <View style={styles.column}>
            {offers
              .filter((_, index) => index % 2 === 0) // Get even-indexed offers
              .map((offer) => (
                <Offer 
                  key={offer.id}
                  itemName={offer.title}
                  description={offer.description}
                  rating={(3.0 + Math.floor(Math.random() * 21) / 10).toFixed(1)}
                  points={offer.points}
                  sellerName={"user1"}
                  imageURL={offer.link}
                />
              ))}
          </View>
          <View style={styles.column}>
            {offers
              .filter((_, index) => index % 2 === 1) // Get odd-indexed offers
              .map((offer) => (
                <Offer 
                  key={offer.id}
                  itemName={offer.title}
                  description={offer.description}
                  rating={(3.0 + Math.floor(Math.random() * 21) / 10).toFixed(1)}
                  points={offer.points}
                  sellerName={"user1"}
                  imageURL={offer.link}
                />
              ))}
          </View>
        </View>
      </ScrollView>
            
      {/* Bottom shadow */}
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 1)']}
        style={styles.bottomShadow}
        pointerEvents="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    width: '100%',
    // borderWidth: 2,
    // borderColor: 'red'
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background.primary
  },
  searchButtonContainer: {
    position: 'absolute',
    top: 0,
    left: theme.spacing.md,
    right: theme.spacing.md,
    zIndex: 1,
  },
  scrollView: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'blue'
  },
  header: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.primary,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    flex: 1,
    gap: theme.spacing.md, // controls the spacing between components in column
    padding: theme.spacing.md/2, // controls the padding of the column (horizontal padding between column and items)
    alignItems: 'stretch',
    // borderWidth: 2,
    // borderColor: 'green'
  },
  expandedContainer: {
    flex: 1,
    backgroundColor: theme.colors.background.overlay,
  },
  expandedContent: {
    flex: 1,
    width: '100%',
    padding: theme.spacing.md,
  },
  topShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 1,
  },
  bottomShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    zIndex: 1,
  },
});
