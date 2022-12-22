// Test validation for additional form (not in use) and Signin/Signup-pages

export const validateText = (elementName: string, value: string, minLength: number = 2) => {
    if (value.length == 0)
        return `You need a correct ${elementName}`
    else if (value.length < minLength)
        return `Your ${elementName} need to be at least ${minLength} chars`
    else
        return ''
}

export const validateEmail = (elementName: string, value: string, regEx: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) => {
    if (value.length == 0)
        return `You need a correct ${elementName}`
    else if (!regEx.test(value))
        return `Your ${elementName} needs to be valid`
    else
        return ''
}

export const validateComments = (elementName: string, value: string, minLength: number = 7) => {
    if (value.length == 0)
        return `You need to write a ${elementName}`
    else if (value.length < minLength)
        return `Your ${elementName} need to be at least ${minLength} chars`
    else
        return ''
}