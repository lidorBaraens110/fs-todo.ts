import React,{FC,useState,FormEvent} from 'react'
import { useHistory } from 'react-router'
import Auth from '../component/Auth'


const Register:FC = () => {

    const history=useHistory()

    const [isLoading,setIsLoading]=useState<boolean>(true)
    const handleRegister=(e:FormEvent)=>{
        e.preventDefault();
        setTimeout(() => {
        setIsLoading(true)    
        }, 2000);
        setIsLoading(false)
    }

    const navigateToLogin=(param:string)=>{
        history.push(`/${param}`)
    }
    return (
        <Auth register={true} 
        handleSubmit={handleRegister} 
        isLoading={isLoading} 
        handleNav={navigateToLogin}
        />
    )
}

export default Register
