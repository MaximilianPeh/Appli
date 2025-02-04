import { View, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import Offer from '../components/Offer';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.column}>
            <Pressable>
              <Offer 
                itemName="ExampleItem1"
                rating="4.5"
                sellerName="Seller1"
              />
            </Pressable>
            <Pressable>
              <Offer 
                itemName="ExampleItem3"
                rating="4.2" 
                sellerName="Seller3"
              />
            </Pressable>
            <Pressable>
              <Offer 
                itemName="ExampleItem5"
                rating="4.7"
                sellerName="Seller5"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem7"
                rating="4.4"
                sellerName="Seller7"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem9"
                rating="4.8"
                sellerName="Seller9"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem11"
                rating="4.6"
                sellerName="Seller11"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem13"
                rating="4.3"
                sellerName="Seller13"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem15"
                rating="4.7"
                sellerName="Seller15"
              />
            </Pressable>
          </View>
          <View style={styles.column}>
            <Pressable>
              <Offer 
                itemName="ExampleItem2" 
                rating="4.8"
                sellerName="Seller2"
              />
            </Pressable>
            <Pressable>
              <Offer 
                itemName="ExampleItem4"
                rating="4.9"
                sellerName="Seller4"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem6"
                rating="4.6"
                sellerName="Seller6"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem8"
                rating="4.3"
                sellerName="Seller8"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem10"
                rating="4.5"
                sellerName="Seller10"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem12"
                rating="4.8"
                sellerName="Seller12"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem14"
                rating="4.4"
                sellerName="Seller14"
              />
            </Pressable>
            <Pressable>
              <Offer
                itemName="ExampleItem16"
                rating="4.6"
                sellerName="Seller16"
              />
            </Pressable>
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
  },
  expandedContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  expandedContent: {
    flex: 1,
    width: '100%',
    padding: 16,
  }
});
