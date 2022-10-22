import axios from "axios"
// eslint-disable-next-line no-unused-vars
import {catchError, delay, firstValueFrom, Observable, repeat, retryWhen, shareReplay, throwError} from 'rxjs'

export const freelanceModule = {
    state: {
        ads: {},
        options: [
            {name: 'Freelance', value: "1"},
            {name: 'Kwork', value: "2"}
        ],
        config: {
            id_user: 5,
            id_parsource: 6,
            keywords: "",
            sources: [],
            hash_parsource: "test_hash_string2"
        },
        hash_parsource: "test_hash_string2",
        countParsing: 0
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
            return state.hash_parsource
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
        }
    },
    actions: {
        async createPars({state, dispatch}) {
            try {
                await axios.post(`/parser-config/`, state.config, {
                        headers: {
                            "Authorization": "Api-Key VSfHLDHK.MM3MeLZNV9HMDEY5s1zz4Yl79lbRwoux",
                            "Content-Type": "application/json;charset=UTF-8",
                            "Access-Control-Allow-Origin": 'http://localhost:8080'
                        }
                    }
                )

                await dispatch('getParsing')
            } catch (e) {
                alert(e)
            }
        },
        async getParsing({state, commit, dispatch}) {
            try {
                const response = await axios.get(`/parser-config/`, {
                        params: { hash_parsource: state.hash_parsource },
                        headers: {
                            "Authorization": "Api-Key VSfHLDHK.MM3MeLZNV9HMDEY5s1zz4Yl79lbRwoux",
                            "Content-Type": "application/json;charset=UTF-8",
                            "Access-Control-Allow-Origin": 'http://localhost:8080'
                        }
                    }
                )

                const res = response.data.at(-1)

                if ((res.kwork_result.length === 0 || res.freelancehabr_result.length === 0) && state.countParsing !== 10) {
                    setTimeout(() => {
                        ++state.countParsing
                        dispatch('getParsing')
                    }, 4000)
                }

                commit('setAds', res)
                console.log(res)

            }catch (e) {
                alert(e)
            }
        }
    }
}