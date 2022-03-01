import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {

    const { user } = useUser()

    return (
        <nav>
            {user !== null &&
                <ul class="navUl">
                    <li className="profileImage">
                        <NavLink to="/translation">
                            <img src="translate.svg" alt="" height={45}></img>
                        </NavLink>
                    </li>
                    <li className="profileImage">
                        <NavLink to="/profile">
                            <img src="person.svg" alt="" height={45}></img>
                        </NavLink>
                    </li>
                    <li>
                        <p class="startNav">Lost in translation</p>
                    </li>
                </ul>
            }
        </nav>
    )
}

export default Navbar