import './Login.style.scss'
import LoginImage from '../../assets/pablo-sign-in 1.svg'
import AppLogo from '../../shared/Logo/Logo'
import { InputWithLabel } from '../../shared/InputWithLabel/InputWithLabel'
import Button from '../../shared/Button/Button'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router'


const schema = yup.object({
    email: yup.string().email().required(),
    password:yup.string().required(),
  })

type LoginFormType = yup.InferType<typeof schema>;
const Login =():React.ReactElement=>{
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
        resolver: yupResolver(schema)
      });

      const onSubmit = (data: LoginFormType) =>{
        //by the way this is a sweet ui nice job done by the ux/ui designer
        console.log(`Welcome ${data.email}`)
        navigate('/users')
      }
      console.log(errors)
    return (
        <div className='login_container'>
            <AppLogo/>
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

                <form  onSubmit={handleSubmit(onSubmit)}>
                    <br /><br /><br />
                    <InputWithLabel
                    label='Email Address'
                    errorMessage={errors.email?.message}
                    register={register('email')}
                    />
                    <br />
                    <InputWithLabel
                    label='Password'
                    type='password'
                    errorMessage={errors.password?.message}
                    register={register('password')}
                    />
                    <br /><br />
                    <div style={{'display':'flex','alignItems':'center','justifyContent':'space-between'}}>
                        <p className='forgot_password_link'>
                        Forgot PASSWORD?
                        </p>
                        <p className='forgot_password_link'>
                        Sign up
                        </p>
                    </div>

                    <br />
                    <Button type='submit'>Log in</Button>
                </form>
            </div>
            </div>
        </div>
      
    )
}

export default Login