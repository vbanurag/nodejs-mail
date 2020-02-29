import User from '../model/user.model'

export const addUser = async (payload) => {
    return await User.create(payload)
}