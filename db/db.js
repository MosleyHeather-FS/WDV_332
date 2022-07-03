//require mongoose

const findUser = async(obj) => {
    return await user.Info.find(obj)
}

const saveUser = async(newUser) => {
    return newUser.save()
}

module.exports = {saveUser, findUser}