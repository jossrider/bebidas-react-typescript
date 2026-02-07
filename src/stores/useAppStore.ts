import { create } from 'zustand'
import { RecipesSliceType, createRecipesSlice } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'
import { AISlice, createAiSlice } from './aiSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAiSlice(...a),
  })),
)
