import React from "react";
import * as Components from './Components';
import {Outlet, Link, useNavigate,Form, redirect, useLoaderData} from 'react-router-dom';
import './login.css';
import { Bars } from 'react-loader-spinner'



export async function loader({request, params}){

    const url = new URL(request.url);
    const endpoint = url.pathname;
    if (endpoint === '/login')
        return true;
    else if(endpoint === '/register')
        return false;


}

export async function loginAction({request, params}) {
    const formData = await request.formData();
    const loginData = Object.fromEntries(formData);
    let response = await fetch(`localhost:8090/UserDtl/${loginData.email}/${loginData.password}`)
    if (response.ok)
    {
        let json = await response.json();
        if (json.result === 'Success') {
            return redirect("/");
            
        }
        else 
        {
            return redirect("/login");
        }
    }
    else 
    {
        return redirect("/");
    }
    
}

export async function registerAction({request, params}) {
    const formData = await request.formData();
    const userData = Object.fromEntries(formData);
    let response = await fetch('localhost:8090/register' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    })
    if (response.ok)
    {
        let json = await response.json();
        return redirect('/')
    }
    else 
    {
        return redirect("/login");
    }
    
}

const Button = ({onClick, children}) => {

    return (
        <button onclick={onClick} className="styled-button" type="submit"> {children} </button>
    );
}


const RegisterForm = ({children ,render , isLoading , setLoading}) =>
{

return(
    <Form method="post"  className="register-form">
        <span className="form-label"> Create Account </span>
        <input className="form-input" placeholder="Name" type="text" name="name"/>
        <input className="form-input" placeholder="Email" type="email" name="email"/>
        <input className="form-input" placeholder="Password" type="password" name="password"/>
        {isLoading ? (render()) : (<Button onClick={()=> setLoading(true)} >{children}</Button>)}

    </Form>
);}

const LoginForm = ({children ,render, isLoading, setLoading}) =>
    {
    return(
        <Form method="post"  className="register-form">
            <span className="form-label"> Sign In </span>
            <input className="form-input" placeholder="Email" type="email" name="email"/>
            <input className="form-input" placeholder="Password" type="password" name="password"/>
            <a className="form-link" href="#">Forgot Your Password?</a>
            
            {isLoading ? (render()) : (<Button onClick={()=> setLoading(true)} >{children}</Button>)}
    
    
        </Form>
    );

}

 function Login() {
    const value = useLoaderData();
     const [isLoading, setLoading] = React.useState(false);


     const [signIn, toggle] = React.useState(value);
      return(
        <div className="login-container">
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <RegisterForm isLoading={isLoading} setLoading={setLoading} render = {()=> <Bars
                        height="80"
                        width="80"
                        color="#042c54"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        /> }>Sign Up</RegisterForm>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                  <LoginForm render={()=><Bars
                        height="80"
                        width="80"
                        color="#042c54"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        />}>Sign In</LoginForm>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
          </div>
      )
 }

export default Login;