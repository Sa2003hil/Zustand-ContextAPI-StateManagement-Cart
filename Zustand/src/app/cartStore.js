// cartStore.js
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import toast from 'react-hot-toast';

const cartStore = (set) => ({
    cartItem: [],
    addToCart: (item) => {
        set((state) => ({ cartItem: [...state.cartItem, item] }));
        toast.success(`Course added to cart!`);
    },
    removeFromCart: (itemId) => {
        set((state) => ({ cartItem: state.cartItem.filter((item) => item.id !== itemId) }));
        toast.success('Removed from cart!')
    },
    clearCart: () => set({ cartItem: [] }),
});

const useCartStore = create(
    devtools(
        persist(
            cartStore,
            {
                name: 'cart',
            }
        )
    )
);

export default useCartStore;
