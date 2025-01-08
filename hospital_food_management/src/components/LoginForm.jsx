

export default function LoginForm ()  {
  return (
   <div className="formdiv flex justify-center w-2/5 items-center"> 
<form action="" method="get" className="form-control w-full max-w-md mt-40">
            <div className="form-heading flex justify-center m-2">
                Login
            </div>
        <div className="mb-3">
        <label htmlFor="username">Username:</label>    
        </div>
        <div className="mb-3">
        <input className="form-control" type="email" name="email" id="email" />
        </div>
        <div className="mb-3">
        <label htmlFor="password">Password</label>
        </div>
        <div className="mb-3">
        <input type="password" className="form-control" name="password" id="password" />
        </div>
        <button className="btn btn-success" type="submit">Login</button>
    </form>
    
   </div>
     )
}
