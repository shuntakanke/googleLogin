import React,{useState} from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';

export default function App() {

  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const[url,setUrl] = useState("");


  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    console.log(response);
  };

  return (
    <div className="container">
      <h1>Login with Google</h1>
      <h2>wellcome: {name} </h2>
      <h2>Email: {email} </h2>
      <img src={url} />
      <GoogleLogin
        clientId="507705356760-r1gtfeoepsqfnrqe8neo8b4r4rqkv8c7.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

