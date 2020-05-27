import React from "react";
import registerUser from "../strapi/registerUser";
import loginUser from "../strapi/loginUser";
import {useHistory} from 'react-router-dom'
import { UserContext } from "../context/user";


export default function Login() {
  
  const history = useHistory()
  const {userLogin, showAlert, alert} = React.useContext(UserContext)

  const [email,setEmail]=React.useState('')
  const [password,setPassword]=React.useState('')
  const [username,setUsername]=React.useState('default')
  const [isMember,setIsMember]=React.useState(true)

  let isEmpty = !email||!password||!username||alert.show;

  const toggleMember = ()=>{
    setIsMember(prevMember=>{
      let isMember = !prevMember;
      isMember?setUsername('default'):setUsername('')
      return isMember
    })
  }
  
  const handleSubmit = async e=>{
    showAlert({msg:'Loading...'})

    e.preventDefault()

    let response;
    if(isMember){
      response = await loginUser({email, password})
    }else{
      response = await registerUser({email, password, username})
    }
    if(response){
      console.log(response);
      const {jwt: token, user:{username}}=response.data;
      const newUser = {token, username}
      showAlert({msg:'You are logged in'})
      userLogin(newUser)
      history.push('/products')
      
    }else{
      showAlert({msg:'Error!', type: 'danger'})
    }
  }


  return <section className="form section">
    <h2 className="section-title">{isMember?'Login':'Register'}</h2>
      <form className='login-form' >
        {/*  */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input type="email" value={email} id='email' onChange={e=>setEmail(e.target.value)} />
        </div>
        {/*  */}
        {/*  */}
        <div className = "form-control">
          <label htmlFor="password">password</label>
          <input type="password" value={password} id='password' onChange={e=>setPassword(e.target.value)} />
        </div>
        {/*  */}
        {/*  */}
        {!isMember && (
          < div className = "form-control" >
          <label htmlFor="username">username</label>
          <input type="username" value={username} id='username' onChange={e=>setUsername(e.target.value)} />
        </div>
        )}
        {/*  */}
        {/*  */}
        {isEmpty && (
          <p className="form-empty">please fill out all form fields</p>
        )}
        {/*  */}
        {/*  */}
        {!isEmpty && (
          <button className="btn btn-block btn-primary " onClick={handleSubmit} >submit</button>
        )}
        {/*  */}
        {/*  */}
        <p className="register-link">
          {isMember?'need to register':'already a member'}
          <button type='button'  onClick={toggleMember}>click here</button>
        </p>
      </form>
  </section>
}

























// export default function Login() {

//   const history = useHistory()

//   const {userLogin, showAlert, alert}=React.useContext(UserContext)

//   const [email,setEmail]=React.useState('')
//   const [password,setPassword]=React.useState('')
//   const [username,setUsername]=React.useState('default')
//   const [isMember,setIsMember]=React.useState(true)

//   let isEmpty = !email || !password || !username;

//   const toggleMember = ()=>{
//     setIsMember(prevMember=>{
//       let isMember = !prevMember;
//       isMember?setUsername('default'):setUsername('')
//       return isMember;
//     })}

//   const handleSubmit = async e =>{
//     e.preventDefault()
//     let response;
//     if(isMember){
//       response = await loginUser({email,password});
//     }else{
//       response = await registerUser({email,password,username})
//     }
//     if(response){
      
//       const {jwt:token, user:{username}}=response.data;
//       const newUser = {token,username};
//       userLogin(newUser)
//       showAlert({
//         msg: `you are logged in : ${username}`
//       })
//       history.push('/products')
//     }else{
//       showAlert({
//         msg: 'there was a problem...',
//         type: 'danger'
//       })
//     }
//   }

//   return <section className="form section">
//     <h2 className="section-title">{isMember?'sign in':'register'}</h2>
//     <form className="login-form">
//       {/* single input */}
//       <div className="form-control">
//         <label htmlFor="email">email</label>
//         <input type='email' id='email' value={email} onChange={e=>setEmail(e.target.value)} />
//       </div>
//       {/* end of single input */}
//       {/* single input */}
//       <div className="form-control">
//         <label htmlFor="password">password</label>
//         <input type='password' id='password' value={password} onChange={e=>setPassword(e.target.value)} />
//       </div>
//       {/* end of single input */}
//       {/* single input */}
//       {!isMember && (
//         <div className="form-control">
//         <label htmlFor="username">username</label>
//         <input type='username' id='username' value={username} onChange={e=>setUsername(e.target.value)} />
//       </div>
//       )}
//       {/* end of single input */}
//       {/* empty form text */}
//       {isEmpty && (
//         <p className="form-empty">please fill out all form fields</p>
//       )}
//       {/* submit btn */}
//       {!isEmpty && (
//         <button className="btn btn-block btn-primary" onClick={handleSubmit}>submit</button>
//       )}
//       {/* register link */}
//       <p className="register-link">
//         {isMember?'need to register':'already a member'}
//         <button type='button' onClick={toggleMember}>click here</button>
//       </p>
//     </form>
//   </section>
// }
