export const theme = {
  // Colors
  colors: {
    primary: '#3AA8C1',     // Your existing accent color
    background: {
      primary: '#000000',   // Main background
      secondary: '#121212', // Slightly lighter black for cards/elements
      overlay: 'rgba(0,0,0,0.5)', // For modals/overlays
    },
    text: {
      primary: '#FFFFFF',   // Main text color
      secondary: '#CCCCCC', // Secondary text
      accent: '#3AA8C1',    // Matching your tab bar active color
    },
    tabBar: {
      active: '#3AA8C1',
      inactive: '#FFFFFF',
      background: '#000000',
    }
  },

  // Spacing (based on your existing layouts)
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },

  // Existing card styles from your Offer component
  card: {
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    borderRadius: 12,
  },
};
