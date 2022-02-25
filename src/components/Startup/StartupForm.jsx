import { useForm } from 'react-hook-form'
import '../../App.css'
import { loginUser } from '../../api/user'
import { useState, useEffect } from 'react'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

const usernameConfig = {
    required: true,
    minLength: 3
}

const StartupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    const [ loading, setLoading ] = useState(false);
    const [ apiError, setApiError ] = useState(null);

    useEffect(() => {
        if(user !== null) {
            navigate('/translation')
        }
    }, [ user, navigate ])

    const onSubmit = async ({username}) => {
        setLoading(true);
        const [ error, userResponse ] = await loginUser(username);
        if(error !== null) {
            setApiError(error)
        }
        if(userResponse !== null) {
            storageSave('translation-user', userResponse)
            setUser(userResponse)
        }
        setLoading(false);
    }
    // console.log(errors);

    const errorMessage = (() => {
        if (!errors.username) {
            return null;
            
        }

        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>Username is too short</span>
        }
    })()

return (
    <>
        <h2>Enter your username</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="username">Username: </label>
                <input type="text" placeholder="Type in your username"
                    {...register("username", usernameConfig)}>
                </input>
               {errorMessage}
            </fieldset>

            {/* button is disabled if loading = true */}
            <button type="submit" disabled={loading}>Continue to translation</button>
            { loading && <p>One second, logging in...</p>} 
            { apiError && <p>{ apiError } </p>}
        </form>
    </>
)
}

export default StartupForm