import { createHeaders } from "."

const apiurl = process.env.REACT_APP_API_URL

export const addTranslation = async (user, translation) => {
    try {
        const response = await fetch(`${apiurl}/${user.id}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation],
            }),
        })

        if(!response.ok) {
            throw new Error('Something went wrong.')
        }

        const result = await response.json()
        return [null, result]

    } catch(error) {
        return [error.message, null]
    }
};

export const clearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiurl}/${userId}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [],
            }),
        });

        if (!response.ok) {
            throw new Error('Something went wrong with clearing the history')
        }

        const result = await response.json()
        return [null, result]

    } catch (error) {
        return [error.message, null]
    }
}