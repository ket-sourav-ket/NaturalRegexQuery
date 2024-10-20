import React, { useEffect } from "react";
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
    console.log("Inside login action");
    console.log(loginData);
    let response = await fetch(`/UserDtls/${loginData.email}/${loginData.password}`)
    console.log(response.ok)
    if (response.ok)
    {
        let json = await response.text();
        console.log(json);
        if (json=== 'Success') {
            localStorage.setItem('isLogged','true');
            return redirect("/");
            
        }
        else 
        {
            localStorage.setItem('isLogged','false');
            alert('wrong credentials!!! Try again');
            return redirect("/");
        }
    }
    else 
    {
        localStorage.setItem('isLogged','false');
        return redirect("/");
    }
    
}

export async function registerAction({request, params}) {
    const formData = await request.formData();
    const userData = Object.fromEntries(formData);
    console.log(userData);
    let response = await fetch('/register' , {
        method: 'POST',
      //  mode:"no-cors",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    });
    if (response.ok)
    {
        localStorage.setItem('isLogged','true');
        let json = await response.json();
        return redirect('/');
    }
    else 
    {
        localStorage.setItem('isLogged','false');
        return redirect("/login");
    }
    
}

const Button = ({onClick, children}) => {

    return (
        <button onClick={onClick} className="styled-button" type="submit"> {children} </button>
    );
}


const RegisterForm = ({children ,render , isLoading , setLoading}) =>
{

return(
    <Form method="post"  className="register-form" onSubmit={()=> setLoading(true)}>
        <span className="form-label"> Create Account </span>
        <input className="form-input" placeholder="Name" type="text" name="name" required/>
        <input className="form-input" placeholder="Email" type="email" name="email" required/>
        <input className="form-input" placeholder="Password" type="password" name="password" required/>
        {isLoading ? (render()) : (<button className="styled-button" type="submit"> {children} </button>)}

    </Form>
);}

const LoginForm = ({children ,render, isLoading, setLoading}) =>
    {
    return(
        <Form method="post"  className="register-form" 
               onSubmit={()=>{setLoading(true)}}>
            <span className="form-label"> Sign In </span>
            <input className="form-input" placeholder="Email" type="email" name="email" required/>
            <input className="form-input" placeholder="Password" type="password" name="password" required/>
            <a className="form-link" href="#">Forgot Your Password?</a>
            {isLoading ? (render()) : (<button className="styled-button" type="submit"> {children} </button>)}
        </Form>
    );

}

function Login() {
    const value = useLoaderData();
    useEffect(()=>{
        setLoading(false);
    })
     const [isLoading, setLoading] = React.useState(false);


     const [signIn, toggle] = React.useState(value);
      return(
        <div className="login-container">
          <Components.Container>
              <Components.SignUpContainer $$signinIn={signIn}>
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

              <Components.SignInContainer $signinIn={signIn}>
                  <LoginForm isLoading={isLoading} setLoading={setLoading} render={()=><Bars
                        height="80"
                        width="80"
                        color="#042c54"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        />}>Sign In</LoginForm>
              </Components.SignInContainer>

              <Components.OverlayContainer $signinIn={signIn}>
                  <Components.Overlay $signinIn={signIn}>

                  <Components.LeftOverlayPanel $signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To stay connected with us please login with your personal info
                      </Components.Paragraph>
                     <Link to={'/login'}> <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Link>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel $signinIn={signIn}>
                        <Components.Title>Hello, Howdy!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Link to={'/register'}>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton> 
                            </Link>
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
          </div>
      )
 }

export function BasicLogin ()
{

    return(
    <Form method="post">
        <input placeholder="email" name="email" type="text" />
        <input placeholder="password" name="password" type="text" />
        <button type="submit">login</button>

        
    </Form>
    );

}

export async function demoAction({request,params}) {
    const formData = await request.formData();
    const creds = Object.fromEntries(formData);
    console.log(creds);
   // localStorage.setItem('isLogged','true');
    return redirect('/');
    
    
}

export default Login;

