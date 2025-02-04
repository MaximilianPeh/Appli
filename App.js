import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Import your screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MessagesScreen from './screens/MessagesScreen';
import CommunityScreen from './screens/CommunityScreen';
import AddPostScreen from './screens/AddPostScreen';
// Import other screens similarly

const Tab = createBottomTabNavigator();

export default function App() {
  const scaleAnim = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = (navigation) => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    navigation.navigate('AddPost');
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,           // This removes the header/title (that looks ugly asf) at the top
          tabBarActiveTintColor: '#3AA8C1', // Color of the active tab (text and icon)
          tabBarInactiveTintColor: 'white',  // Color of inactive tabs
          tabBarStyle: {
            backgroundColor: '#000000',      // Background color of the tab bar
            // You can add more styling here like:
            // borderTopColor: '#000000',
            // height: 60,
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
          name="Community" 
          component={CommunityScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="AddPost" 
          component={AddPostScreen}
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
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#3AA8C1',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  }
});
