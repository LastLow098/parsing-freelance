export const crudModule = {
    state: {
        changingAd: {},
        isShowModal: false
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

    },
    mutations: {
        setChangingAd(state, ad) {
            state.changingAd = ad
        },
        setIsShowModal(state, boolean) {
            state.isShowModal = boolean
        }
    }
}