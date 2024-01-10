import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    return (
        <div>
            <h1>Profile</h1>
            <h5>Halo {username}</h5>
        </div>
    )
}

export default ProfilePage