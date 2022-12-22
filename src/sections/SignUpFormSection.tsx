import React, { useState } from "react";
import Alerts from '../components/Alerts';
import { validateText, validateEmail } from '../utilities/Validation'

// Sign up form to create a new user

export interface ISignUpForm {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const SignUpFormSection: React.FC = () => {
    const DEFAULT_VALUE: ISignUpForm = { firstName: '', lastName: '', email: '', password: '' } 
    const [userDataSignUp, setuserDataSignUp] = useState<ISignUpForm>(DEFAULT_VALUE)
    const [errorsSignUp, seterrorsSignUp] = useState<ISignUpForm>(DEFAULT_VALUE)
    const [successSignUp, setsuccessSignUp] = useState<boolean>(false)
    const [failedSignUp, setfailedSignUp] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setuserDataSignUp({ ...userDataSignUp, [id]: value })

        if (id === 'firstName')
            seterrorsSignUp({ ...errorsSignUp, [id]: validateText(id, value) })

        if (id === 'lastName')
            seterrorsSignUp({ ...errorsSignUp, [id]: validateText(id, value) })

        if (id === 'email')
            seterrorsSignUp({ ...errorsSignUp, [id]: validateEmail(id, value) })
        
        if (id === 'password')
            seterrorsSignUp({ ...errorsSignUp, [id]: validateText(id, value) })
    }

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setsuccessSignUp(false)
        setfailedSignUp(false)

        if (userDataSignUp.firstName !== '' && userDataSignUp.lastName !== '' && userDataSignUp.email !== '' && userDataSignUp.password !== '')
        if (errorsSignUp.firstName === '' && errorsSignUp.lastName === '' && errorsSignUp.email === '' && errorsSignUp.password === '') {

                const res = await fetch('http://localhost:5000/api/authentication/signup', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userDataSignUp)
                })

                const data = await res.json()

                if (res.status === 201) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setsuccessSignUp(true)
                    setuserDataSignUp(DEFAULT_VALUE)


                } else if (res.status === 409) {
                    setsuccessSignUp(false)
                    setfailedSignUp(true)
                }
            }
    }

    return (
        <section className="__contact-form-section">
            <div className="container">

                {successSignUp ? (<Alerts alertType="successSignUp" title="The user was created" text="Everything works fine" />) : (<></>)}
                {failedSignUp ? (<Alerts alertType="danger" title="The user already exists" text="Please try again" />) : (<></>)}

                <form onSubmit={handleSignUp} noValidate>
                    <div>
                        <input id="firstName" className={(errorsSignUp.firstName ? 'error' : '')} value={userDataSignUp.firstName} onChange={(e) => handleChange(e)} type="text" placeholder="Your firstname" />
                        <div>{errorsSignUp.firstName}</div>
                    </div>
                    <div>
                        <input id="lastName" className={(errorsSignUp.lastName ? 'error' : '')} value={userDataSignUp.lastName} onChange={(e) => handleChange(e)} type="text" placeholder="Your lastname" />
                        <div>{errorsSignUp.lastName}</div>
                    </div>
                    <div>
                        <input id="email" className={(errorsSignUp.email ? 'error' : '')} value={userDataSignUp.email} onChange={(e) => handleChange(e)} type="text" placeholder="Your email" />
                        <div>{errorsSignUp.email}</div>
                    </div>
                    <div>
                        <input id="password" className={(errorsSignUp.password ? 'error' : '')} value={userDataSignUp.password} onChange={(e) => handleChange(e)} type="text" placeholder="Your password" />
                        <div>{errorsSignUp.password}</div>
                    </div>
                    <div className="form-btn">
                        <button type="submit" className="form-btn">Create user</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUpFormSection