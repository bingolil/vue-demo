import _ from 'lodash';

const person = {
    namespaced: true,
    state: {
        user: {},
        token: null
    },
    getters: {
        user(state) {
            if (!_.size(state.user)) { // 刷新页面时user不存在内容
                let user = JSON.parse(window.localStorage.getItem('user'));
                if (user) {
                    state.user = user;
                }
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }
            return state.user;
        },
        token(state) {
            if (!_.size(state.token)) { // 刷新页面时，token默认为初始值
                return sessionStorage.getItem('token');
            }
            return state.token;
        }
    },
    mutations: {
        setUser(state, user) { // 将user放到sessionStorage中和 store 的 state 中
            var _user = _.merge({}, state.user);
            if (!_.size(_user)) { // state.user 不存在
                _user = {}; // 清空 _user
            }

            _.forEach(user, function(value, key) {
                _user[key] = value;
            })
            sessionStorage.setItem('user', JSON.stringify(_user));
            state.user = _user;
        },
        setToken(state, token) {
            sessionStorage.setItem('token', token);
            state.token = token;
        },
        LogOut(state) {
            sessionStorage.clear();
            state.user = {};
            state.token = null;
        }
    }
}

export default person;