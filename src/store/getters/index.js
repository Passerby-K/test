import userInfo from './user/info'

const common_module = {

}
//  用户模块
const user_module = {
	...userInfo,
}

export default {
	common_module,
	user_module,
}