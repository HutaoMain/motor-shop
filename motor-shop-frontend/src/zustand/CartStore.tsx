import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductInterface } from "../Types";

interface CartStore {
  items: {
    product: ProductInterface;
    variationIndex: number;
    quantity: number;
  }[];
  total: number;
  addItem: (
    product: ProductInterface,
    variationIndex: number,
    quantity: number
  ) => void;
  increaseItem: (id: string) => void;
  decreaseItem: (id: string) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<CartStore>(
  persist(
    (set) => ({
      items: [],
      total: 0,
      addItem: async (
        product: ProductInterface,
        variationIndex: number,
        quantity: number = 1
      ) => {
        try {
          const selectedVariation =
            product.productVariationsList[variationIndex];
          const productQuantity = selectedVariation.quantity;

          set((state: any) => {
            const index = state.items.findIndex(
              (item: any) =>
                item.product.id === product.id &&
                item.variationIndex === variationIndex
            );

            if (index === -1) {
              if (quantity > productQuantity) {
                quantity = productQuantity;
              }
              return {
                items: [...state.items, { product, variationIndex, quantity }],
                total: state.total + selectedVariation.price * quantity,
              };
            } else {
              const newQuantity = state.items[index].quantity + quantity;
              if (newQuantity > productQuantity) {
                quantity = productQuantity - state.items[index].quantity;
              }
              const newItems = [...state.items];
              newItems[index].quantity += quantity;
              return {
                items: newItems,
                total: state.total + selectedVariation.price * quantity,
              };
            }
          });
        } catch (error) {
          console.error(error);
        }
      },
      increaseItem: (id: string) => {
        set((state: any) => {
          const cartItem = state.items.find(
            (item: any) => item.product.id === id
          );
          const productQuantity =
            cartItem.product.productVariationsList[cartItem.variationIndex]
              .quantity;

          if (productQuantity > cartItem.quantity) {
            return {
              items: state.items.map((item: any) =>
                item.product.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              total:
                state.total +
                cartItem.product.productVariationsList[cartItem.variationIndex]
                  .price,
            };
          } else {
            alert("You can't add more items to the cart.");
            return state;
          }
        });
      },
      decreaseItem: (id: string) => {
        set((state: any) => {
          const cartItem = state.items.find(
            (item: any) => item.product.id === id
          )!;

          const newItems =
            cartItem.quantity === 1
              ? state.items.filter((item: any) => item.product.id !== id)
              : state.items.map((item: any) =>
                  item.product.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                );

          return {
            items: newItems,
            total:
              state.total -
              cartItem.product.productVariationsList[cartItem.variationIndex]
                .price,
          };
        });
      },
      removeItem: (id: string) => {
        set((state: any) => {
          const cartItem = state.items.find(
            (item: any) => item.product.id === id
          )!;
          return {
            items: state.items.filter((item: any) => item.product.id !== id),
            total:
              state.total -
              cartItem.product.productVariationsList[cartItem.variationIndex]
                .price *
                cartItem.quantity,
          };
        });
      },
    }),
    { name: "cart-storage" }
  ) as any
);
