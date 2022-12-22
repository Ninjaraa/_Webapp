import React, { useState, useContext, createContext } from 'react';
import { User, UserRequest } from '../models/userModel';
import { UserProviderProps } from '../models/userProviderPropsModel'

// User context for login and create new user function

export interface IUserContext {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    userRequest: UserRequest
    setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>
    users: User[]
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: number) => void
}

export const UserContext = createContext<IUserContext | null>(null)
export const useUserContext = () => { return useContext(UserContext) }
export const UserProvider = ({ children }: UserProviderProps) => {
    const signupURL: string = 'http://localhost:5000/api/signup'
    const user_default: User = { id: 0, firstName: '', lastName: '', email: '' }
    const userRequest_default: UserRequest = { firstName: '', lastName: '', email: '', password: '' }
    const [user, setUser] = useState<User>(user_default)
    const [userRequest, setUserRequest] = useState<UserRequest>(userRequest_default)
    const [users, setUsers] = useState<User[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await fetch('http://localhost:5000/api/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRequest)
        })

        if (result.status === 200) {
            setUserRequest(userRequest_default)
        }
    }

    const get = async (id: number) => {
        const result = await fetch(`${signupURL}/${id}`)
        if (result.status === 200)
            setUser(await result.json())
    }

    const getAll = async () => {
        const result = await fetch(`${signupURL}`)
        if (result.status === 200)
            setUsers(await result.json())
    }

    const update = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await fetch(`${signupURL}/${user.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (result.status === 200)
            setUser(await result.json())
    }

    const remove = async (id: number) => {
        const result = await fetch(`${signupURL}/${id}`, {
            method: 'delete',
        })

        if (result.status === 204)
            setUser(user_default)
    }

    return (
        <UserContext.Provider value={{ user, setUser, users, create, get, getAll, update, remove, userRequest, setUserRequest }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider