import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Registro</label>
                        <input type="text" name="txt" placeholder="User name" required="" />
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            required=""
                        />
                        <button>Registrate</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label for="chk" aria-hidden="true">Ingreso</label>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            required=""
                        />
                        <button>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login