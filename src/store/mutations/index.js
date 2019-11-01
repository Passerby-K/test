import common_data from 'mutations/common/data'
import userAuth from 'mutations/user/auth'

//  公共数据页面
const common_module = {
	...common_data,
}

//  用户模块
const user_module = {
	...userAuth
}

export default {
	common_module,
	user_module,
}
