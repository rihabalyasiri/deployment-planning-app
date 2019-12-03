import React from 'react';
import './signUp.css'

const SignUp = () => {
    return(
        <div className="signUp" >
            <nav className="sign-nav">
                <ul className="sign-list">
                    <li className="sign-element"><a href="#" className="sign-link">SIGN UP</a></li>
                    <li className="sign-element"><a href="#" className="sign-link">LOGIN</a></li>
                </ul>
            </nav>
            <div className="signUp-block">
                <a href="#" className="login-link"><i class="fab fa-facebook-f"></i><p>LOGIN WITH FACEBOOK</p></a>
                <a href="#" className="login-link"><i class="fab fa-google"></i><p>LOGIN WITH GOOGLE</p></a>
                <p className="or">or</p>
                <input type="text" placeholder="User Name" className="register-input"/>
                <input type="email" placeholder="Email" className="register-input"/>
                <input type="texpasswordt" placeholder="Password" className="register-input"/>
                <div>
                <input type="checkbox" /><p>By creating an account you agree to our 
                    <a href="#">Terms of Service</a> and <a href="#">Privacy of Policy</a></p>
                </div>
                <input type="submit" value="continue"/>
               

            </div>
        </div>
    );
}

export default SignUp;