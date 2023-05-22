import * as React from 'react';
import { useState, useEffect } from 'react';
import UserServices from '../../services/user-services';
import { User } from '../types/user-types';

interface UserListProps {
    
}

const userServices = new UserServices()
 
const UserList: React.FunctionComponent<UserListProps> = () => {

    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState<string>("")

    useEffect(() => {
        userServices.getUsersDataService()
        .then(res => {
            setUsers(res.data)
        }).catch(error => {
            setError(error.message)
        })
    }, [])

    const handleClickAdd = () => {
        const newUser = {
            id: users.length + 1,
            username: "haha"
        }
        const orginalUsers = users;
        setUsers([...users, newUser])
        userServices.addUserDataService(newUser)
        .catch(error => {
            setError(error.message)
            setUsers(orginalUsers)
        })
    }

    const handleClickUpdate = (id: number) => {
        const orginalUsers = users
        const updatedUser = {
            id: id,
            username: "lol"
        }
        setUsers(users.map((user: User) => {
            return user.id === id ? updatedUser : user
        }))
        userServices.updateUserDataService(updatedUser)
        .catch(error => {
            setError(error.message)
            setUsers(orginalUsers)
        })
    }

    const handleClickDelete = (id: number) => {
        const originalUsers = users;
        setUsers(users.filter(user => user.id !== id))
        userServices.deleteUserDataService(id)
        .catch(error => {
            setError(error.message)
            setUsers(originalUsers)
        })
    }

    return (  
        <div>
            <p className='text-danger'>{error}</p>
            <button type="button" className='btn btn-outline-dark' onClick={handleClickAdd} >ADD</button>
            <ul>
                {
                    users && users.map((user: User) => {
                        return (
                            <li key={user.id} className='d-flex w-25 justify-content-between mb-3'>
                                {user.username}
                                <div>
                                    <button type='button' className='btn btn-outline-primary me-2' onClick={() => handleClickUpdate(user.id)}>Update</button>
                                    <button type='button' className='btn btn-outline-danger' onClick={() => handleClickDelete(user.id)}>Delete</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
 
export default UserList;