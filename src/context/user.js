import React from 'react'
import { createContext } from 'react/cjs/react.development'


function getUserFromLocalStorage (){
    return localStorage.getItem('user')?
    JSON.parse(localStorage.getItem('user')):{username:null, token:null}
}

const UserContext = createContext()

function UserProvider({children}) {

    const [user,setUser]=React.useState(getUserFromLocalStorage())
    
    const userLogin = (user)=>{
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user))
    }
    
    const userLogout = ()=>{
        setUser({username:null, token:null})
        localStorage.removeItem('user')
    }

    const [alert,setAlert]=React.useState({
        show: false,
        type: 'success',
        msg: ''
    })

    const showAlert = ({msg, type='success'})=>{
        setAlert({msg, type, show: true})
    }
    
    const hideAlert = ()=>{
        setAlert({...alert, show: false})
    }

    return <UserContext.Provider value={{user, userLogin, userLogout, alert, showAlert, hideAlert}} >{children}</UserContext.Provider>
}

export {UserProvider, UserContext}
























// const UserContext = React.createContext()

// function getUserFromLocalStorage(){
//     return localStorage.getItem('user')?
//     JSON.parse(localStorage.getItem('user')):{username: null, token: null}
// }

// function UserProvider({children}) {

//     const [user,setUser]=React.useState(getUserFromLocalStorage())

//     const userLogin = user =>{
//         setUser(user);
//         localStorage.setItem('user', JSON.stringify(user))
//     }
//     const userLogout = ()=>{
//         setUser({username:null, token:null})
//         localStorage.removeItem('user')
//     }

//     const [alert,setAlert]=React.useState({
//         show: false,
//         msg: '',
//         type: 'success'
//     })
    
//     const showAlert = ({msg , type = 'success'})=>{
//         setAlert({show:true, msg, type})
//     }
//     const hideAlert = () =>{
//         setAlert({...alert, show:false})
//     }


//     return (
//         <UserContext.Provider value={{user,userLogin,userLogout, alert, showAlert, hideAlert}}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// export {UserProvider, UserContext}
