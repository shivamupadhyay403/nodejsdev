
const login = async (data) => {
}
const register = async (data) => {
    const { username, email } = data

    return {
        username,
        email,
    }
}

module.exports = {
    login,
    register,
}
