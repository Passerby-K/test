//  公共数据
import common_data from 'state/common/data'

//  用户数据
import userAuth from 'state/user/auth'

// 公共模块
const common_module = { common_data }

// 用户模块
const user_module = { userAuth }

export default {
    common_module,
    user_module,
}
