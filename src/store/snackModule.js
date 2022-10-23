export const snackModule = {
    state: {
        isShow: false,
        message: "",
        style: ""
    },
    getters: {
        getIsShow(state) {
            return state.isShow
        },
        getMessage(state) {
            return state.message
        },
        getStyle(state) {
            return state.style
        },
    },
    actions: {
        showWithTimeout({commit}, {time, message, style}) {
            commit('setMessage', message)
            commit('setStyle', style)

            setTimeout(() => {
                commit('setShow', true)
            }, time)
        },

        show({commit}, {message, style}) {
            commit('setMessage', message)
            commit('setStyle', style)
            commit('setShow', true)
        },

        hide({commit}) {
            commit('setShow', false)
        }
    },
    mutations: {
        setShow(state, boolean) {
            state.isShow = boolean
        },
        setMessage(state, message) {
            state.message = message
        },
        setStyle(state, style) {
            state.style = style
        }
    }
}