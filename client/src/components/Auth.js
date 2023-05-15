import {useState} from 'react'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('password is', password)
        if(password.length < 6){
            console.log('password must be at least 6 characters')
            setError('Password must be at least 6 characters')
            return
        }

        await fetch('http://localhost:5000/auth')
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    return (
        //login  form with email and password put everuthing in the
        <div className="auth">
            <form onSubmit = {(e) => handleSubmit(e)}>
                <input type="email" placeholder="Email" onChange={handleEmailChange}/>
                <input type="password" placeholder="Password" onChange={handlePasswordChange} />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Auth