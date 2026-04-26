import { create } from "zustand";
import { devtools, persist, subscribeWithSelector} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createCartSlice } from "./cartSlice";

export const useStore = create(
    devtools(
        persist(
            subscribeWithSelector(
                immer((...a) => ({
                    ...createCartSlice(...a)
                }))
            ),
            {
                name: "shopping-cart"
            }
        )
    )
)