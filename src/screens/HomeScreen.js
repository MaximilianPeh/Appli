import { View, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Offer from '../components/Offer';
import { theme } from '../styles/theme';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('https://fbdb-128-59-176-236.ngrok-free.app/get_all_offers', {
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

    fetchOffers();
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <View style={styles.container}>
      {/* Top shadow */}
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
        style={styles.topShadow}
        pointerEvents="none"
      />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.grid}>
          <View style={styles.column}>
            <Offer 
              itemName="ExampleItem1"
              rating="4.5"
              sellerName="Seller1"
            />
            <Offer 
              itemName="ExampleItem3"
              rating="4.2" 
              sellerName="Seller3"
            />
            <Offer 
              itemName="ExampleItem5"
              rating="4.7"
              sellerName="Seller5"
            />
            <Offer
              itemName="ExampleItem7"
              rating="4.4"
              sellerName="Seller7"
            />
            <Offer
              itemName="ExampleItem9"
              rating="4.8"
              sellerName="Seller9"
            />
            <Offer
              itemName="ExampleItem11"
              rating="4.6"
              sellerName="Seller11"
            />
            <Offer
              itemName="ExampleItem13"
              rating="4.3"
              sellerName="Seller13"
            />
            <Offer
              itemName="ExampleItem15"
              rating="4.7"
              sellerName="Seller15"
            />
          </View>
          <View style={styles.column}>
            <Offer 
              itemName="ExampleItem2" 
              rating="4.8"
              sellerName="Seller2"
            />
            <Offer 
              itemName="ExampleItem4"
              rating="4.9"
              sellerName="Seller4"
            />
            <Offer
              itemName="ExampleItem6"
              rating="4.6"
              sellerName="Seller6"
            />
            <Offer
              itemName="ExampleItem8"
              rating="4.3"
              sellerName="Seller8"
            />
            <Offer
              itemName="ExampleItem10"
              rating="4.5"
              sellerName="Seller10"
            />
            <Offer
              itemName="ExampleItem12"
              rating="4.8"
              sellerName="Seller12"
            />
            <Offer
              itemName="ExampleItem14"
              rating="4.4"
              sellerName="Seller14"
            />
            <Offer
              itemName="ExampleItem16"
              rating="4.6"
              sellerName="Seller16"
            />
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
