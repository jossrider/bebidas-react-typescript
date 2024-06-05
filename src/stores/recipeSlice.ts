import { StateCreator } from "zustand"

type Category = {}

export type RecipesSliceType = {
  categories: []
}

export const createRecipesSlice : StateCreator<RecipesSliceType>= () => ({
  categories: [],
})
