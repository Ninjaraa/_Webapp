import React, { useState } from "react";
import Alerts from '../components/Alerts';
import { validateText, validateEmail } from '../utilities/Validation'

// Sign in form to sign in with an existing user

export interface ISignInForm {
    email: string,
    password: string
}

const SignInFormSection: React.FC = () => {
    const DEFAULT_VALUES: ISignInForm = { email: '', password: '' }
    const [userDataSignIn, setuserDataSignIn] = useState<ISignInForm>(DEFAULT_VALUES)
    const [errorsSignIn, seterrorsSignIn] = useState<ISignInForm>(DEFAULT_VALUES)
    const [successSignIn, setsuccessSignIn] = useState<boolean>(false)
    const [failedSignIn, setfailedSignIn] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setuserDataSignIn({ ...userDataSignIn, [id]: value })

        if (id === 'email')
            seterrorsSignIn({ ...errorsSignIn, [id]: validateEmail(id, value) })

        if (id === 'password')
            seterrorsSignIn({ ...errorsSignIn, [id]: validateText(id, value) })
    }

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setsuccessSignIn(false)
        setfailedSignIn(false)

        if (userDataSignIn.email !== '' && userDataSignIn.password !== '')
            if (errorsSignIn.email === '' && errorsSignIn.password === '') {

                const res = await fetch('http://localhost:5000/api/authentication/signin', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userDataSignIn)
                })

                const data = await res.json()

                if (await res.status === 200) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setsuccessSignIn(true)
                    setuserDataSignIn(DEFAULT_VALUES)

                } else if (res.status === 400) {
                    setsuccessSignIn(false)
                    setfailedSignIn(true)
                }
            }
    }

    return (
        <section className="__contact-form-section">
            <div className="container">

                {successSignIn ? (<Alerts alertType="successSignIn" title="Signed in!" text="Everything works fine" />) : (<></>)}
                {failedSignIn ? (<Alerts alertType="danger" title="Iäm sorry, you are not signed in" text="Please try again" />) : (<></>)}

                <form onSubmit={handleSignIn} noValidate>
                    <div>
                        <input id="email" className={(errorsSignIn.email ? 'error' : '')} value={userDataSignIn.email} onChange={(e) => handleChange(e)} type="text" placeholder="Your email" />
                        <div>{errorsSignIn.email}</div>
                    </div>

                    <div>
                        <input id="password" className={(errorsSignIn.password ? 'error' : '')} value={userDataSignIn.password} onChange={(e) => handleChange(e)} type="text" placeholder="Your password" />
                        <div>{errorsSignIn.password}</div>
                    </div>

                    <div className="form-btn">
                        <button type="submit" className="form-btn">Sign In</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignInFormSection