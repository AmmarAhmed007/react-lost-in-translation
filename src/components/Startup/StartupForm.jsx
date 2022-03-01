import { useForm } from 'react-hook-form'
import '../../App.css'
import { loginUser } from '../../api/user'
import { useState, useEffect } from 'react'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/storageKeys'

const usernameConfig = {
    required: true,
    minLength: 3
}

const StartupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        if (user !== null) {
            navigate('/translation')
        }
    }, [user, navigate])

    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username);
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
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

            <nav class="startNav">
                <ul>
                    <li class="startNavUl"><p>Lost in translation</p></li>
                </ul>
            </nav>
            <div class="startUpForm">
                <div class="startUpHeader">
                    <img src="robot.png" alt="" height={150} className="animate__animated animate__tada"></img>
                    <p>Lost in translation</p>
                </div>
                <div class="startupSubmit">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className='startupFieldset'>
                            <label htmlFor="username"></label>
                            <input type="text" placeholder="Type in your username"
                                {...register("username", usernameConfig)}>
                            </input>
                            {errorMessage}
                            <button class="startButton" type="submit" disabled={loading}>Continue to translation</button>
                        </fieldset>

                        {/* button is disabled if loading = true */}
                        {loading && <p class="animate__animated animate__slideInDown">One second, logging in...</p>}
                        {apiError && <p>{apiError} </p>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default StartupForm