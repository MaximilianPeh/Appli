import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { theme } from '../styles/theme';

export default function MessagesScreen() {
  const conversations = [
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Is this item still available?',
      time: '2:30 PM',
      unread: true,
    },
    {
      id: 2,
      name: 'Sarah Smith',
      lastMessage: 'Great! I\'ll take it. When can we meet?',
      time: '1:45 PM',
      unread: false,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      lastMessage: 'Thanks for the quick response!',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 4,
      name: 'Emma Wilson',
      lastMessage: 'Perfect! See you tomorrow at 2pm',
      time: 'Yesterday',
      unread: true,
    },
    {
      id: 5,
      name: 'David Brown',
      lastMessage: 'How much are you asking for it?',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      lastMessage: 'I have a similar item if you\'re interested',
      time: '2 days ago',
      unread: false,
    },
    {
      id: 7,
      name: 'James Taylor',
      lastMessage: 'Could you send more pictures?',
      time: '2 days ago',
      unread: true,
    },
    {
      id: 8,
      name: 'Maria Garcia',
      lastMessage: 'Deal! Thanks for the sale',
      time: '3 days ago',
      unread: false,
    },
    {
      id: 9,
      name: 'Robert Wilson',
      lastMessage: 'Is pickup available?',
      time: '3 days ago',
      unread: false,
    },
    {
      id: 10,
      name: 'Emily Davis',
      lastMessage: 'Sorry, I\'ll have to pass',
      time: '4 days ago',
      unread: false,
    },
    {
      id: 11,
      name: 'Thomas Moore',
      lastMessage: 'What\'s the condition like?',
      time: '4 days ago',
      unread: false,
    },
    {
      id: 12,
      name: 'Jennifer Lee',
      lastMessage: 'Can you hold it for me?',
      time: '5 days ago',
      unread: true,
    },
    {
      id: 13,
      name: 'Kevin Martinez',
      lastMessage: 'Is the price negotiable?',
      time: '5 days ago',
      unread: false,
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {conversations.map((conversation) => (
          <View key={conversation.id} style={styles.conversationContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {conversation.name.charAt(0)}
              </Text>
            </View>
            <View style={styles.messageContent}>
              <View style={styles.messageHeader}>
                <Text style={styles.name}>{conversation.name}</Text>
                <Text style={styles.time}>{conversation.time}</Text>
              </View>
              <Text 
                style={[
                  styles.lastMessage,
                  conversation.unread && styles.unreadMessage
                ]}
                numberOfLines={1}
              >
                {conversation.lastMessage}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  header: {
    display: 'none',
  },
  scrollView: {
    flex: 1,
  },
  conversationContainer: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderTopWidth: 2,
    borderColor: theme.colors.background.secondary,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  avatarText: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.size.md,
    fontWeight: 'bold',
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xs,
  },
  name: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.size.sm,
    fontWeight: 'bold',
  },
  time: {
    color: theme.colors.text.secondary,
    fontSize: theme.typography.size.sm,
  },
  lastMessage: {
    color: theme.colors.text.secondary,
    fontSize: theme.typography.size.sm,
  },
  unreadMessage: {
    color: theme.colors.text.primary,
    fontWeight: 'bold',
  },
});
