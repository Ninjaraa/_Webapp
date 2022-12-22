import React from 'react'

interface IAlertNotification {
    alertType: string,
    title: string,
    text: string,
}

const Alerts: React.FC<IAlertNotification> = ({ alertType = "warning", title, text }) => {
    return (

        <div className={`alert alert-${alertType} text-center`} role="alert">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Alerts