export default{
    user_nickname: state => {
        return state.userAuth.info.nickname;
    },
    user_info: state => {
        return state.userAuth.info;
    },
}