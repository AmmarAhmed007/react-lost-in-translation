import { useForm } from 'react-hook-form'
import '../../App.css'

const usernameConfig = {
    required: true,
    minLength: 3
}

const StartupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    console.log(errors);

    const errorMessage = (() => {
        if (!errors.username) {
            return null
            
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

            <button type="submit">Continue to translation</button>
        </form>
    </>
)
}

export default StartupForm