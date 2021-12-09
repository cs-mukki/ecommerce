export const getCollection = (collections, collectionId) => {
  if (collectionId) {
    const existingKey = Object.keys(collections).find(
      (key) => key === collectionId
    );
    return existingKey ? collections[collectionId] : null;
  }
  return [];
};
