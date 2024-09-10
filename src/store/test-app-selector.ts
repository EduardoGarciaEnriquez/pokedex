const state = {
    isThemeDark: true,
    isDrawerVisible: false
}

export const testUseAppSelector = (f: (state: unknown) => void) => f(state)
