export const state = () => ({
  sesion: undefined,
})

export const mutations = {
  setSesion (state, sesion) {
    state.sesion = sesion
  },
  logout (state) {
    state.sesion = undefined
  },
}
