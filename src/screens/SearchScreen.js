import { View, StyleSheet, SafeAreaView, Text, ScrollView, RefreshControl } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { theme } from '../styles/theme';
import React, { useState, useEffect } from 'react';
import Offer from '../components/Offer';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [offers, setOffers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchOffers = async () => {
    try {
      const response = await fetch('https://128d-128-59-176-236.ngrok-free.app/recommendations', {
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
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchOffers();
    console.log("Refreshed!");
    setRefreshing(false);
  };

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
        </View>
        
        <ScrollView 
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#ffffff"
            />
          }
        >
          <View style={styles.grid}>
            <View style={styles.column}>
              {offers
                .filter((_, index) => index % 2 === 0)
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
                .filter((_, index) => index % 2 === 1)
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
  scrollView: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    flex: 1,
    gap: theme.spacing.md,
    padding: theme.spacing.md/2,
    alignItems: 'stretch',
  },
});