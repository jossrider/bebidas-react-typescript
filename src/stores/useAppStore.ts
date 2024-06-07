import { create } from "zustand"
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice"
import { devtools } from "zustand/middleware"
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice"

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
  }))
)
