import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Import your screens
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import SearchScreen from './src/screens/SearchScreen';
import AddOfferScreen from './src/screens/AddOfferScreen';
// Import other screens similarly
import { theme } from './src/styles/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  const scaleAnim = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.85,
      useNativeDriver: true,
      speed: 20
    }).start();
  };

  const onPressOut = (navigation) => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30
    }).start();
    navigation.navigate('AddOffer');
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.tabBar.active,
            tabBarInactiveTintColor: theme.colors.tabBar.inactive,
            tabBarStyle: {
              backgroundColor: theme.colors.tabBar.background,
              borderTopWidth: 0,
            }
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen 
            name="Search" 
            component={SearchScreen}
            options={{
              tabBarLabel: 'For You',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="people" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen 
            name="AddOffer" 
            component={AddOfferScreen}
            options={({ navigation }) => ({
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <View style={styles.addButtonContainer}>
                  <Pressable 
                    onPressIn={onPressIn} 
                    onPressOut={() => onPressOut(navigation)}
                  >
                    <Animated.View style={[styles.addButton, { transform: [{ scale: scaleAnim }] }]}>
                      <Ionicons name="add" size={32} color="white" />
                    </Animated.View>
                  </Pressable>
                </View>
              ),
            })}
          />
          <Tab.Screen 
            name="Messages" 
            component={MessagesScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbubbles" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor={theme.colors.background.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 0
  },
  addButton: {
    backgroundColor: theme.colors.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
