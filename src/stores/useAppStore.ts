import { create } from 'zustand'
import { devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipieSlice'

// El ...a pasa las funciones de set dentro del slice

export const useAppStore = create<RecipesSliceType>()(devtools( (...a ) => ( {
    ...createRecipesSlice(...a)
})))