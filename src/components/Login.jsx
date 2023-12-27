import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({ email: "", password: "" });

    function handleSubmit(e){
        e.preventDefault()  // prevent reloading the page
        localStorage.setItem("user" , JSON.stringify({ email : user.email , id  : Math.floor(Math.random() * 100) }) )
        navigate('/')
        
    }

    useEffect(()=>{
        
        let userData = localStorage.getItem('user')
        userData = JSON.parse(userData)

        if(userData?.email){
            navigate('/') // this will be navigated if user already exsisit
        }
    } , [])

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => {
          setUser({ ...user ,  email: e.target.value  });
        }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setUser({ ...user ,  password: e.target.value });
        }}
      />

      <button>login</button>
    </form>
  );
};

export default Login;
