import { View, Text, StyleSheet, SafeAreaView, TextInput, Animated, Pressable } from 'react-native';
import { theme } from '../styles/theme';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddOfferScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('');
  const [link, setLink] = useState('');
  const [topics, setTopics] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const scaleAnim = new Animated.Value(1);
  const successOpacity = new Animated.Value(0);
  const successScale = new Animated.Value(0);

  const animateSuccess = () => {
    successOpacity.setValue(1);
    successScale.setValue(0);
    
    Animated.sequence([
      Animated.spring(successScale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 20,
      }),
      Animated.timing(successOpacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
        delay: 1000,
      }),
    ]).start();
  };

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
      speed: 20
    }).start();
  };

  

  // Clears all inputs, in the future will also send information to database
  const onPressOut = async () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30
    }).start();
    
    try {
      const offerData = {
        title: title,
        description: description,
        points: Number(points),
        link: link,
        topics: topics,
        createdAt: new Date(),
      };

      
      // add offers
      const response = await fetch('https://9000-128-59-176-236.ngrok-free.app/put_offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offerData),
      });

      if (!response.ok) {
        throw new Error('API call failed');
      }

      // Show success animation
      setShowSuccess(true);
      animateSuccess();

      // Clear all inputs after successful addition
      setTitle('');
      setDescription('');
      setPoints('');
      setLink('');
      setTopics('');
    } catch (error) {
      console.error("Error adding offer: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.addingContainer}>
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'transparent']}
            style={styles.topShadow}
          />
          
          <View style={styles.headerContainer}>
            <Pressable 
              onPressIn={onPressIn}
              onPressOut={onPressOut}
            >
              <Animated.View style={[styles.addButton, { transform: [{ scale: scaleAnim }] }]}>
                <Text style={styles.addButtonText}>Add</Text>
              </Animated.View>
            </Pressable>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Title</Text>
            <TextInput 
              style={styles.input}
              placeholder="Tell everyone what are item is"
              placeholderTextColor={theme.colors.text.secondary}
              value={title}
              onChangeText={setTitle}
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.multilineInput]}
              placeholder="Add a description"
              placeholderTextColor={theme.colors.text.secondary}
              multiline={true}
              numberOfLines={3}
              value={description}
              onChangeText={setDescription}
            />

            <Text style={styles.label}>Point Cost</Text>
            <TextInput
              style={styles.input}
              placeholder="Add how many points its renting for"
              placeholderTextColor={theme.colors.text.secondary}
              keyboardType="numeric"
              value={points}
              onChangeText={setPoints}
            />

            <Text style={styles.label}>Image URL</Text>
            <TextInput
              style={styles.input}
              placeholder="Add image URL here"
              placeholderTextColor={theme.colors.text.secondary}
              value={link}
              onChangeText={setLink}
            />

            <Text style={styles.label}>Tag Topics</Text>
            <TextInput
              style={styles.input}
              placeholder="Add topics"
              placeholderTextColor={theme.colors.text.secondary}
              value={topics}
              onChangeText={setTopics}
            />
          </View>

          {showSuccess && (
            <Animated.View style={[
              styles.successIcon,
              {
                opacity: successOpacity,
                transform: [{ scale: successScale }],
              }
            ]}>
              <Text style={styles.checkmark}>✓</Text>
            </Animated.View>
          )}
          
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.1)']}
            style={styles.bottomShadow}
          />
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.background.primary,
  },
  addingContainer: {
    backgroundColor: 'white',
    borderRadius: theme.borderRadius,
    width: '100%',
    height: '95%',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  headerContainer: {
    position: 'absolute',
    top: theme.spacing.md,
    right: theme.spacing.md,
    zIndex: 1,
  },
  addButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius,
  },
  addButtonText: {
    color: theme.colors.text.primary,
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: theme.spacing.md,
    gap: theme.spacing.xs,
  },
  label: {
    fontSize: theme.typography.size.sm,
    fontWeight: '500',
    color: '#000000',
    marginBottom: theme.spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: theme.borderRadius,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
    fontSize: theme.typography.size.xs,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  topShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 1,
  },
  bottomShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 1,
  },
  successIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    backgroundColor: '#4CAF50',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  checkmark: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
