import GoogleLogin from 'react-google-login';
import './App.css'
import MainDash from './Component/MainDash/MainDash';
import RightSide from './Component/RightSide/RightSide';
import Sidebar from './Component/Sidebar/Sidebar';
import { useEffect } from 'react';
import {gapi} from 'gapi-script'

const clientID= "459370716290-8550qbd7576f271gkh7niht4m1pe431h.apps.googleusercontent.com"

const App=()=> {
  const handleFailure= (result) => {
    alert(result);
  }
  const handleLogin= (googleData) => {
    console.log(googleData);
  }
 
  useEffect(()=>{
    function start(){
    gapi.client.init({
      clientId: clientID,
      scope:""
    })
    };
    gapi.load('client:auth', start);
  });

  return (
    <div className="App">
      <div className="App-header">
        <h1>Login</h1>
 
      <div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}>
        </GoogleLogin>
        </div>
      </div>
        {/* <div className="AppGlass">
          <Sidebar/>
          <MainDash/>
          <RightSide/>
        </div> */}
    </div>
  );
}

export default App;
