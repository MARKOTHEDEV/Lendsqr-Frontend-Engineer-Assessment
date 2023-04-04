import './Login.style.scss'
import LoginImage from '../../assets/pablo-sign-in 1.svg'
import AppLogo from '../../shared/Logo/Logo'
import { InputWithLabel } from '../../shared/InputWithLabel/InputWithLabel'

const Login =():React.ReactElement=>{

    return (
        <div className='login_container'>
            <AppLogo/>
            <br />
            <br />
            <br />
            <div className='auth_container'>
            <div className="auth_img_container">
                <img src={LoginImage} alt="" />
            </div>
            <div className="auth_form_container">
                <div>
                    <h1>Welcome!</h1>
                    <p>Enter details to login.</p>
                </div>

                <form action="">
                    <br /><br /><br />

                    <InputWithLabel
                    label='Email Address'
                    />
                    <br />
                    <InputWithLabel
                    label='Password'
                    type='password'
                    />
                    <br /><br />
                    <p className='forgot_password_link'>
                    Forgot PASSWORD?
                        </p>

                    
                </form>
            </div>
        </div>
        </div>
      
    )
}

export default Login