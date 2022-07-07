//require mongoose

const findUser = async(obj) => {
    return await user.Info.find(obj)

}

const saveUser = async(user) => {
    return await user.save()
}

module.exports = {saveUser, findUser}