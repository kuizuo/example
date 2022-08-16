export const isHiddenSidebar = ref(false)
export const toggleHiddenSidebar = useToggle(isHiddenSidebar)

useStorage('isHiddenSidebar', isHiddenSidebar)
