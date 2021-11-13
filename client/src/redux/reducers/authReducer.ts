import {FAILED_LOGIN, LOGIN,LOGOUT} from '../type';
import { AnyAction } from 'redux';

interface Auth{
    token:string,
    user:{
        userId:string,
        name:string,
        email:string,
        picture?:string
    }
    err?:string
}

const initialState: Auth = {
   token:'',
   user:{
       userId:'',
       name:'',
       email:''
   }
  }

const authReducer =(state=initialState,action:AnyAction)=>{
    switch (action.type){
        case FAILED_LOGIN:
            return {...state,err:action.payload}
        case LOGIN:
            localStorage.setItem('Profile',JSON.stringify({token:action.payload.token,user:action.payload.user}))
            return {...state,token:action.payload.token,user:action.payload.user}
        case LOGOUT:
            localStorage.clear()
            return initialState
        default:
           return state
    }
}

export default authReducer