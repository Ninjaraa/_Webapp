import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

// Thank you Yup and Bezkoder.com for the code assistance ;)

type IContactForm = {
    name: string;
    comments: string;
    email: string;
}

const ContactUsSection: React.FC = () => {
    const formURL: string = 'http://win22-webapi.azurewebsites.net/api/contactform'
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Please write your name to be qualified for this form')
            .min(2, 'Your name is less than 2 characters? Be serious now'),
        comments: Yup.string()
            .required('You need to add some data to send data')
            .min(6, 'Maybe you should add some more content?'),
        email: Yup.string()
            .required('Please use a correct email to be qualified for this form')
            .email('Please use a correct email. Like name@namesson.com'),
    })

    const { register, handleSubmit, formState: { errors } } =
        useForm<IContactForm>({
            resolver: yupResolver(validationSchema),
            mode: 'onChange',
        })

    const onSubmit = async () => {
        const res = await fetch(`${formURL}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(FormData)
        })

        if (res.status === 200)
            return true
        return false

    }

    return (
        <section className="__contact-form-section">
            <div className="container">
                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input id="name" type="text" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Your name" />
                        <div className="errorMessage">{errors.name?.message}</div>
                    </div>
                    <div>
                        <input id="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Your Mail" />
                        <div className="errorMessage">{errors.email?.message}</div>
                    </div>
                    <div className="textarea">
                        <input id="comments" type="textarea" {...register('comments')} className={`form-control ${errors.comments ? 'is-invalid' : ''}`} placeholder="Comments" /> <div className="errorMessage">{errors.comments?.message}</div>
                    </div>
                    <div>
                        <button type="submit" className="form-btn">Post Comments</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactUsSection