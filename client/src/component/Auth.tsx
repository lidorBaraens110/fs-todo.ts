import React,{FC,useState,FormEvent,ChangeEvent} from 'react'
import {Card,TextField,makeStyles, Button, Typography,CircularProgress} from '@material-ui/core';

const useStyles=makeStyles(theme=>({
container:{
    backgroundColor:'#d3d3d3',
    height:'100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
},
form:{
    height:'40vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',
},
header:{
    fontSize:'1.5rem'
},
card:{
    backgroundColor:'#f1f1f1',
    padding:'1rem 2rem',
    textAlign:'center'
},
submit:{
    backgroundColor:'blue',
    color:'white'
},
register:{
    backgroundColor:'lightgreen',
    fontSize:'0.7rem',
    padding:'0.25rem 0.5rem'
},
wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))

interface UserDetails {
    userName:string|null,
    pass:string| null,
    email:string| null
}

interface Props{
    register:boolean,
    handleSubmit:(e:FormEvent)=>void,
    isLoading:boolean,
    handleNav:(param:string)=>void
}

 const Auth:FC<Props> = ({register,handleSubmit,isLoading,handleNav}) => {

    const classes=useStyles();
    const [userD,setUserD]=useState<UserDetails>({
        userName:null,
        pass:null,
        email:null
    });

    const handleChange=(e:ChangeEvent<HTMLInputElement> )=>{
        const {value,name}=e.target;
        setUserD(pre=>{
            return {...pre,[name]:value}
        })
    }



    return (
        <div className={classes.container}>
            <Card className={classes.card} variant='outlined'>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Typography className={classes.header}>Todos</Typography>
                    <TextField required label='user name' size='small' variant='outlined' onChange={handleChange} value={userD.userName} name='userName' />
                    <TextField required label='password' type='password' size='small' variant='outlined' onChange={handleChange} value={userD.pass} name='pass' />
                    {register&&<TextField required={register?true:false} label='email'  size='small' variant='outlined' onChange={handleChange} value={userD.email} name='email' />}
                    <div className={classes.wrapper}>
                    <Button type='submit' 
                    className={classes.submit} 
                    variant='contained'
                    disabled={!isLoading}
                    >
                      {register?'Register':'Login'}
                        </Button>
        {!isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
                </form>
                <Button onClick={()=>handleNav(register?'login':'register')} className={classes.register} size='small' >{register?'Login':'Register'}</Button>
            </Card>
        </div>
    )
}

export default Auth