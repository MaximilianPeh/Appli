// Simple user data store
export const userData = {
    username: "John Doe",
    avatar: "https://example.com/avatar.jpg",
    rating: 4.1,
    points: 500,
    followers: 0,
    following: 0,
    listings: [],
    savedItems: [],
};

// Helper functions
export const updateUserData = (newData) => {
    Object.assign(userData, newData);
};

export const addListing = (listing) => {
    userData.listings.push(listing);
};

export const addSavedItem = (item) => {
    userData.savedItems.push(item);
};

export const addFollower = () => {
    userData.followers += 1;
};

export const addFollowing = () => {
    userData.following += 1;
};
