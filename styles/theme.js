export const theme = {
  // Colors
  colors: {
    primary: '#05ace6',     // Your existing accent color
    background: {
      primary: '#000000',   // Main background
      secondary: '#121212', // Slightly lighter black for cards/elements
      overlay: 'rgba(0,0,0,0.5)', // For modals/overlays
    },
    text: {
      primary: '#FFFFFF',   // Main text color
      secondary: '#CCCCCC', // Secondary text
      accent: '#05ace6',    // Matching your tab bar active color
    },
    tabBar: {
      active: '#05ace6',
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

  // Border radius (roundness of courners)
  borderRadius: 12,

  typography: {
    size: {
      xs: 10,
      sm: 12,
      md: 24,
      lg: 48,
      xl: 96,
      
    }
  }
};
