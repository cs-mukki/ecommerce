export const getItem = (collections, id) => {
  const keys = Object.keys(collections).map((key) => key);
  const collectionsList = keys.map((key) => collections[key]);
  const itemsList = collectionsList.map((collection) => collection.items);
  const items = [];
  itemsList.forEach((item) => {
    item.forEach((i) => {
      items.push(i);
    });
  });

  return items.find((item) => item.id === +id);
};
