import { StateCreator } from 'zustand'
import { FavoritesSliceType } from './favoritesSlice'

export type Notificaction = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notificaction
    showNotification: (payload : Pick<Notificaction, 'text' | 'error'>) => void

}


export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType>= (set) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
    }
})

// Slice Pattern