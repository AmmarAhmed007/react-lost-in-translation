import { useForm } from 'react-hook-form'
import '../../App.css'
import { loginUser } from '../../api/user'
import { useState } from 'react'

const usernameConfig = {
    required: true,
    minLength: 3
}

const StartupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [ loading, setLoading ] = useState(false);
    const [ apiError, setApiError ] = useState(null);

    const onSubmit = async ({username}) => {
        setLoading(true);
        const [ error, user] = await loginUser(username);
        console.log('Error: ', error);
        console.log('User: ', user);
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
        </form>
    </>
)
}

export default StartupForm