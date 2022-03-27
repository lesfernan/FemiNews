import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate();

    const signin = (event) => {
        event.preventDefault();

        const body = {
            email,
            password
        }
        console.log(body)


        const API = axios.create({
            baseURL: "https://83b5-190-237-26-230.ngrok.io"
        })

        API.post("/api/signin", body)
            .then((res) => {
                console.log(res)
                // localStorage.setItem("userId", res.data.userFound._id)
                // navigate('/');
            })
            .catch((error) => console.log(error))
    }
    const signup = (event) => {
        event.preventDefault();

        const body = {
            email,
            password,
            name
        }

        const API = axios.create({
            baseURL: "https://83b5-190-237-26-230.ngrok.io"
        })

        API.post("/api/signup", body)
            .then((res) => {
                console.log(res)
                // localStorage.setItem("userId", res.data.userFound._id)
                // navigate('/');
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className="login-container">
            <div className="login-main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form onSubmit={signup}>
                        <label htmlFor="chk" aria-hidden="true">Registro</label>
                        <input type="text" name="txt" placeholder="User name" required="" onChange={(e) => setName(e.target.value)}/>
                        <input type="email" name="email" placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)}/>
                        <input
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            required=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button>Registrate</button>
                    </form>
                </div>

                <div className="login">
                    <form onSubmit={signin}>
                        <label htmlFor="chk" aria-hidden="true">Ingreso</label>
                        <input type="email" name="email" placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)}/>
                        <input
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            required=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login