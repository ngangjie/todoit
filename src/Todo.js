import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { doc, deleteDoc, } from 'firebase/firestore'
import React from 'react'
import todoCollections from './DBColl'
import  './Todo.css'

export default function Todo(props) {

  const deleteTodo = (id)=>{
    const todoRef = doc(todoCollections, id)
    deleteDoc(todoRef).then(res =>console.log(res)).catch(e=>console.log(e.message))
    console.log(id)
  }

  // update todo
 
  return (
    <div>
        <List className = 'todo_list '>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
           
          </Avatar>
        </ListItemAvatar>
          <ListItemText primary= {props.text} secondary ="Todo" />
        </ListItem>
        <div className='btn'>
        <Button onClick = {event=> props.update(props.id)} color="success" variant="contained">update</Button>
         <Button onClick = {event=> deleteTodo(props.id)} color="error" variant="contained">Delete </Button>

        </div>
        </List>
    </div>
  )
}
