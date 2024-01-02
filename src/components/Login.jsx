import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/login.module.css'
import Store from "../context/store";

const Login = () => {

    const navigate = useNavigate()

    const { setUser } = useContext(Store)

    const [formData, setformData] = useState({ email: "", password: "" });

    function handleSubmit(e){
        e.preventDefault()  // prevent reloading the page
        localStorage.setItem("user" , JSON.stringify({ email : formData.email , id  : Math.floor(Math.random() * 100) }) )
        setUser(formData) //  user data in store
        navigate('/')
        
    }

    useEffect(()=>{
        
        let formDataData = localStorage.getItem('formData')
        formDataData = JSON.parse(formDataData)

        if(formDataData?.email){
            navigate('/') // this will be navigated if formData already exsisit
        }
    } , [])

  return (
<>
    <form className={styles.form} onSubmit={ handleSubmit }>
        <h1>Login</h1>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => {
            setformData({ ...formData ,  email: e.target.value  });
        }}
        />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
            setformData({ ...formData ,  password: e.target.value });
        }}
        />

      <button>login</button>
    </form>
        </>
  );
};

export default Login;


