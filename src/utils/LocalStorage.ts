// utils/LocalStorage.ts

export const loadCart = (): any[] | undefined => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Gagal memuat cart dari localStorage", e);
    return undefined;
  }
};

export const saveCart = (cart: any[]) => {
  try {
    const serializedState = JSON.stringify(cart);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.error("Gagal menyimpan cart ke localStorage", e);
  }
};
