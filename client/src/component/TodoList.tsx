import React,{FC} from 'react'
import {Card, List,ListItem,Checkbox,makeStyles, CardHeader, ListItemText, ListItemIcon,IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons'
const useStyles=makeStyles(theme=>({
container:{
display:'flex',
justifyContent:'center',
alignItems:'center'
},
card:{
    boxSizing:'border-box',
    minWidth:'30vw',
    minHeight:'50vh',
    textAlign:'center',
    padding:'0 1rem'
},
listItemIcon:{
    textAlign:'center'
}
}))
interface Props {
    
}

 const TodoList:FC = (props: Props) => {
    
    const classes=useStyles();

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <CardHeader title='Todo List'/>
                <List>
                    <ListItem>
                        <ListItemText>
                            jalgjlasgas
                        </ListItemText>
                        <Checkbox/>
                        <ListItemIcon className={classes.listItemIcon}>
                            <IconButton>
                            <Delete/>
                                </IconButton>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Card>
        </div>
    )
}

export default TodoList