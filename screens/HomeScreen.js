import { View, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Offer from '../components/Offer';
import { theme } from '../styles/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Top shadow */}
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.6)', 'transparent']}
        style={styles.topShadow}
        pointerEvents="none"
      />
      
      <ScrollView style={styles.scrollView}>
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
