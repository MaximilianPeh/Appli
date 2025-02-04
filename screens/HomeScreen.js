import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Offer from '../components/Offer';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderWidth: 4,
    borderColor: 'red',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  }
});
