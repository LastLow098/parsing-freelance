import axios from "axios"

export const freelanceModule = {
    state: {
        ads: {},
        options: [
            {name: 'freelancehabr', value: "1", server: 'freelancehabr'},
            {name: 'kwork', value: "2", server: 'kworkservice'}
        ],
        config: {
            id_user: 5,
            id_parsource: 6,
            keywords: "",
            sources: [],
            hash_parsource: "test_hash_string2"
        },
        countParsing: 0,
        isParsingFinish: false
    },
    getters: {
        getOptions(state) {
            return state.options
        },
        getSource(state) {
            return state.config.sources
        },
        getKeywords(state) {
            return state.config.keywords
        },
        getAds(state) {
            return state.ads
        },
        getHash(state) {
            return state.config.hash_parsource
        },
        getIsParsingFinish(state) {
            return state.isParsingFinish
        }
    },
    mutations: {
        setSource(state, sources) {
            state.config.sources = sources
        },
        setKeywords(state, keywords) {
            state.config.keywords = keywords
        },
        setAds(state, ads) {
            state.ads = ads
        },
        setCount(state, count) {
            state.countParsing = count
        },
        setHash(state, hash) {
            state.config.hash_parsource = hash
        },
        setIsParsingFinish(state, boolean) {
            state.isParsingFinish = boolean
        }
    },
    actions: {
        async createPars({state, dispatch, commit}) {
            try {
                dispatch('show', { message: "Загрузка...", style: "loading"})
                commit('setHash', Date.now())
                await axios.post(`/parser-config/`, state.config, {
                        headers: {
                            "Authorization": "Api-Key VSfHLDHK.MM3MeLZNV9HMDEY5s1zz4Yl79lbRwoux",
                            "Content-Type": "application/json;charset=UTF-8",
                            "Access-Control-Allow-Origin": 'http://localhost:8080'
                        }
                    }
                )
                await dispatch('getParsing')
                dispatch('hide')
            } catch (e) {
                console.error(e)
                dispatch('show', { message: "Запрос не был получен", style: "error"})
            }
        },
        async getParsing({state, commit, dispatch}) {
            try {
                commit('setIsParsingFinish', false)
                dispatch('show', { message: "Загрузка...", style: "loading"})
                const response = await axios.get(`/parser-config/`, {
                        params: { hash_parsource: state.config.hash_parsource },
                        headers: {
                            "Authorization": "Api-Key VSfHLDHK.MM3MeLZNV9HMDEY5s1zz4Yl79lbRwoux",
                            "Content-Type": "application/json;charset=UTF-8",
                            "Access-Control-Allow-Origin": 'http://localhost:8080'
                        }
                    }
                )

                const res = response.data.at(-1)

                if (state.countParsing !== 10) {
                    setTimeout(() => {
                        commit('setCount', state.countParsing + 1)
                        dispatch('getParsing')
                        commit('setMessage', `Загрузка... Запрос: ${state.countParsing}`)
                        // dispatch('show', { message: `Загрузка... Запрос: ${state.countParsing}`, style: "loading"})
                    }, 3000)
                }else {
                    dispatch('hide')
                    commit('setCount', 0)
                    commit('setIsParsingFinish', true)
                }

                commit('setAds', res)


            }catch (e) {
                console.error(e)
                dispatch('show', { message: "Запрос не был получен", style: "error"})
            }
        }
    }
}