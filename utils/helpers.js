// Repository for common helper functions that can be imported wherever needed
const Utils = {
  // Check if timedPost is active based off expiration
  isActivePost: function(post) {
    const isoDate = new Date().toISOString();
    return new Date(post.expiration).getTime() > new Date(isoDate).getTime();
  },
};

export default Utils;