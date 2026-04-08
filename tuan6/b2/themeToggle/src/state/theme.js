import {atom} from 'recoil'

const THEME_STORAGE_KEY = 'theme'

export const themeState = atom({
    key:'themeState',
    default:'light-theme',
    effects_UNSTABLE: [
        ({setSelf, onSet}) => {
            if (typeof window !== 'undefined') {
                const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
                if (savedTheme) {
                    setSelf(savedTheme)
                }
            }

            onSet((newTheme) => {
                if (typeof window !== 'undefined') {
                    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
                }
            })
        }
    ]
})