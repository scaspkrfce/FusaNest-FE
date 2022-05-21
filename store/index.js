export const state = () => ({
  sesion: undefined,
  admin: false,
  selectedId: null,
})

export const mutations = {
  setSesion (state, sesion) {
    state.sesion = sesion
    state.admin = sesion.admin
  },
  logout (state) {
    state.sesion = undefined
  },
  setSelectedId (state, id) {
    state.selectedId = id
  },
}
