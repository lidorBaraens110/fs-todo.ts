
import React,{FC,useState,FormEvent} from 'react'
import { useHistory } from 'react-router'
import Auth from '../component/Auth'


const Login:FC = () => {

    const history=useHistory()

    const [isLoading,setIsLoading]=useState<boolean>(true)
    const handleLogin=(e:FormEvent)=>{
        e.preventDefault();
        setTimeout(() => {
        setIsLoading(true)    
        }, 2000);
        setIsLoading(false)
    }

    const navigateToRegister=(param:string)=>{
        history.push(`/${param}`)
    }
    return (
        <Auth register={false} 
        handleSubmit={handleLogin} 
        isLoading={isLoading} 
        handleNav={navigateToRegister}
        />
    )
}

export default Login

