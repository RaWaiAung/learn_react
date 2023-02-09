import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";

function UserLists() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doAddUser, isCreatingUser, creatingUsersError] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doAddUser();
    }

    let content;
    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />
    } else if (loadingUsersError) {
        content = <div>Error ......</div>
    } else {
        content = data.map((user) => {
            return <UserListItem key={user.id} user={user} />;
        });
    }

    return <div><div className="flex flex-row justify-between items-center m-3">
        <h1 className="text-xl m-2">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
            + Add User
        </Button>
        {creatingUsersError && 'Error Occur...'}
    </div>
        {content}</div>
};

export default UserLists;