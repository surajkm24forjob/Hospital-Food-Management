import { useState } from "react";
import {axios} from 'axios';

export default function LoginForm ()  {


  const [username, setUsername] = useState("");
  const  [password,setPassword] = useState('');
  const [error, setError] = useState('');

  
  const handlesubmit = async(e)=>{
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password,
      });

      if (response.data.message === 'Login successful') {
        // Redirect or update the UI to indicate successful login
        alert('Login successful');
      }
    } catch (err) {
      setError('Invalid username or password');
      console.log(err,error);
    }
  };
  return (
   <div className="formdiv flex justify-center w-3/6 items-center"> 
<form action="" method="get" className="form-control w-full max-w-md mt-40 rounded-lg shadow-2xl shadow-purple-800/60">
            <div className="form-heading flex justify-center m-2">
                Login
            </div>
        <div className="mb-3">
        <label htmlFor="username">Username:</label>    
        </div>
        <div className="mb-3">
        <input className="form-control" type="email" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
        <label htmlFor="password">Password</label>
        </div>
        <div className="mb-3">
        <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className="btn btn-success" onClick={handlesubmit} type="submit">Login</button>
    </form>
    
   </div>
     )
}
