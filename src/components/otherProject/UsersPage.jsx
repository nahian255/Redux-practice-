import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateNickName } from "../../redux/features/users/usersSlice";
import { useEffect } from "react";

const UsersPage = () => {
    const dispatch = useDispatch()

    const newDAta = useSelector((state) => state.users.nickName)
    // console.log(newDAta,'newdata')

    const users = useSelector((state)=>state.users.usersArray)
    console.log(users,'from UI')
    
    
    const handleUpdate = () => {
        dispatch(updateNickName('sa'))
    }

    useEffect(() => {
        dispatch(fetchUsers()); // Fetch users on component mount
    }, [dispatch]);

    return (
        <div>
            <h1> User Home Page</h1>
            <p>
                showing the user data, using async thunk. And using json placeholder api.
            </p>
            <div>
                {/*  showing initialize store er data.. */}

                <h1>Name : {newDAta}</h1>
                <button onClick={handleUpdate}> Change NickName</button>
            </div>
        </div>
    )
};

export default UsersPage;