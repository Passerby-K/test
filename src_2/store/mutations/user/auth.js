export default {
	set_user_auth_login: (state, sta) =>{
		state.userAuth.login = sta;
        localStorage.islogin = sta;
	},
	set_user_auth_info: (state, data) =>{
		state.userAuth.info = data;
		localStorage.clientAuth = JSON.stringify(data);
	},
	set_user_auth_nickname: (state, nickname) =>{
		state.userAuth.info.nickname = nickname;
	},
}