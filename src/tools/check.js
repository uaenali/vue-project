// 用户名
export function username(fileds, value, cb) {
    if (!/^\w{4,8}$/.test(value)){
        return cb(new Error('用户名是4-8位的数字字母下划线'));
    }
    cb();//没问题返回
}

// 密码
export function password(fileds, value, cb) {
    // 字母数字谁在前
    if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)){
        return cb(new Error('密码要包含字母和数字'));
    }
    cb();

}