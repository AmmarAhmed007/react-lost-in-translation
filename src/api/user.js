import { createHeaders } from "./index"
const apiUrl = process.env.REACT_APP_API_URL

//check if user exists
const FindUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error('Error in completing the request')
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, []]
    }
}
//create a new user
const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Username ' + username + ' could not be created')
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, []]
    }
}

export const loginUser = async (username) => {
    const [checkError, user] = await FindUser(username)

    if (checkError !== null) {
        return [checkError, null]
    }

    if (user.length > 0) {
        //user doesn't exist
        return [null, user.pop()]
    }

    return await createUser(username)
}

