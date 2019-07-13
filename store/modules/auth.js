import * as types from "../mutation_types"
import API from '../api'
import localforage from 'localforage'
import bus from '../../bus'

export const getters = {
    isAuthorised: state => state.token !== null,
    getToken: state => state.token,
    getMe: state => state.me
};

export const actions = {


    authorise({dispatch, commit}, {email, password}) {
        return API.authorise({email, password}).then(data => {
            return dispatch('setAuthData', data)
        })
    },

    refreshAuth({state, dispatch, commit}) {
        return API.refreshToken(state.refreshToken).then(data => {
            return dispatch('setAuthData', data)
        })
    },

    fetchMe({commit}) {
        return API.me().then(data => {
            commit(types.SET_ME, data)
        }).catch(() => {
            commit(types.SET_ME, null)
        })
    },
    

    setAuthData({dispatch, commit}, data) {
        return localforage.setItem('auth/token', data.token).then(() => {
            return localforage.setItem('auth/refreshToken', data.refreshToken).then(() => {
                commit(types.SET_TOKEN, data.token);
                commit(types.SET_REFRESH_TOKEN, data.refreshToken);
                if (data.token) {
                    return dispatch('fetchMe')
                }
                return Promise.resolve(data)
            })
        })
    },

    init({dispatch, commit}) {
        return localforage.getItem('auth/token').then(token => {
            return localforage.getItem('auth/refreshToken').then(refreshToken => {
                commit(types.SET_TOKEN ,token);
                commit(types.SET_REFRESH_TOKEN, refreshToken);
                if (token) {
                    dispatch('fetchMe')
                    // return dispatch('fetchMe')
                }
                return Promise.resolve(token)
            })
        })
    },

};


export const mutations = {
    [types.SET_TOKEN](state, token) {
        state.token = token
    },

    [types.SET_REFRESH_TOKEN](state, token) {
        state.refreshToken = token
    },

    [types.SET_ME](state, me) {
        state.me = me
    },
};

export const state = {
    token: null,
    refreshToken: null,
    me: null
};

