import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/login.module.css'
import Store from "../context/store";
// import styles from "../styles/auth.module.css"
import { GoEye , GoEyeClosed } from "react-icons/go";

const Login = () => {

    const navigate = useNavigate()

    const { setUser } = useContext(Store)
    const [formData, setformData] = useState({ email: "", password: "" });
    const [ showPassword , setShowPassword] = useState(false)


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
          required
          onChange={(e) => {
              setformData({ ...formData ,  email: e.target.value  });
          }}
          />

      <div className={styles.input_wrapper}>

        <input
          type={ (showPassword) ? "text" : "password" }
          placeholder="Enter Password"
          required
          onChange={(e) => {
            setformData({ ...formData ,  password: e.target.value });
          }}
          />

          <button onClick={ ()=>{ setShowPassword(!showPassword) } } type="button">
            {
              (showPassword) ? <GoEyeClosed /> : <GoEye/>  
            }
            </button>
        </div>

      <button>login</button>
    </form>
        </>
  );
};

export default Login;




// (true) ?  : 