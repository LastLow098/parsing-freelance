import axios from "axios"

export const crudModule = {
    state: {
        changingAd: {},
        isShowModal: false,
        activeOption: {}
    },
    getters: {
        getChangingAd(state) {
            return state.changingAd
        },
        getIsShowModal(state) {
            return state.isShowModal
        }
    },
    actions: {
        async deleteAd({rootState, state, commit, dispatch}, id) {
            try {
                dispatch('show', { message: "Загрузка...", style: "loading"})
                await axios.delete(`/api/${state.activeOption.server}/${id}/`, {
                        headers: {
                            "Authorization": "Api-Key VSfHLDHK.MM3MeLZNV9HMDEY5s1zz4Yl79lbRwoux",
                            "Content-Type": "application/json;charset=UTF-8",
                            "Access-Control-Allow-Origin": '*'
                        }
                    }
                )
                const ads_changing = {...rootState.freelance.ads}
                ads_changing[`${state.activeOption.name}_result`] = ads_changing[`${state.activeOption.name}_result`].filter(elem => elem.id !== id)
                commit('setAds', ads_changing)
                dispatch('hide')

            }catch (e) {
                console.error(e)
                dispatch('show', { message: "Запрос не был получен", style: "error"})
            }
        },

// eslint-disable-next-line no-unused-vars
        async changeAd({state, rootState, commit, dispatch}) {
            try {
                commit('setIsShowModal', false)
                dispatch('show', { message: "Загрузка...", style: "loading"})
                const newAd = await axios.put(`/api/${state.activeOption.server}/${state.changingAd.id}/`, state.changingAd, {
                        headers: {
                            "Authorization": "Api-Key VSfHLDHK.MM3MeLZNV9HMDEY5s1zz4Yl79lbRwoux",
                            "Content-Type": "application/json;charset=UTF-8",
                            "Access-Control-Allow-Origin": '*'
                        }
                    }
                )

                const ads_changing = {...rootState.freelance.ads}
                const elem_id = ads_changing[`${state.activeOption.name}_result`].findIndex(elem => elem.id === state.changingAd.id)
                ads_changing[`${state.activeOption.name}_result`].splice(elem_id, 1, newAd.data)
                commit('setAds', ads_changing)
                dispatch('hide')
            }catch(e) {
                dispatch('show', { message: "Запрос не был получен", style: "error"})
            }
        }
    },
    mutations: {
        setChangingAd(state, ad) {
            state.changingAd = ad
        },
        setIsShowModal(state, boolean) {
            state.isShowModal = boolean
        },
        setActiveOption(state, option) {
            state.activeOption = option
        }
    }
}