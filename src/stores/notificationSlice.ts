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
    hideNotification: () => void
}


export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType>= (set, get) => ({
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
        setTimeout(() => {
            get().hideNotification()
        }, 3000);
    },
    hideNotification: () => {
        set({
            notification: {
                text: '',
                error: false,
                show: false
            }
        })
    }
})

// Slice Pattern