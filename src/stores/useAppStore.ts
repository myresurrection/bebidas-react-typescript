import { create } from 'zustand'
import { devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipieSlice'
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'

// El ...a pasa las funciones de set dentro del slice

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools( (...a ) => ( {
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),

})))