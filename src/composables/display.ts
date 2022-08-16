export const isFullDisplay = ref(false)
export const toggleFullDisplay = useToggle(isFullDisplay)

useStorage('isFullDisplay', isFullDisplay)
