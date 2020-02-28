import React, {useState} from 'react'

const Login = () => {

    const [ user, setUser ] = useState({})

    handleChange = e => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = () => {
        
    }

    return(
        <>
        <label>Username
            <input type="text" onChange={handleChange} name="username"/>
        </label>
        <label>Password
            <input type="password" onChange={handleChange} name="password"/>
        </label>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login;