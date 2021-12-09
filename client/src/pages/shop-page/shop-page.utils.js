export const getCollections = (collections) => {
  return collections.reduce((Accumulator, collection) => {
    Accumulator[collection.title.toLowerCase()] = collection;
    return Accumulator;
  }, {});
};

export const getCollectionsInArray = (collections) => {
  const keys = Object.keys(collections).map((key) => key);
  return keys.reduce((Accumulator, key) => {
    Accumulator = [...Accumulator, collections[key]];
    return Accumulator;
  }, []);
};
