export const getCartCount = (cartItems) => {
  return cartItems.reduce((Accumulator, item) => {
    Accumulator += item.quantity;
    return Accumulator;
  }, 0);
};

export const addItem = (cartItems, item) => {
  const [existing] = cartItems.filter((i) => i.id === item.id);
  if (existing) {
    const index = cartItems.indexOf(existing);
    cartItems[index] = { ...existing, quantity: existing.quantity + 1 };
    return [...cartItems];
  }
  return [{ ...item, quantity: 1 }, ...cartItems];
};

export const removeItem = (cartItems, item) => {
  if (item.quantity > 1) {
    const index = cartItems.indexOf(item);
    cartItems[index] = { ...item, quantity: item.quantity - 1 };
    return [...cartItems];
  }
  return cartItems.filter((i) => i.id !== item.id);
};

export const deleteItemFromCart = (cartItems, item) => {
  return cartItems.filter((i) => i.id !== item.id);
};
