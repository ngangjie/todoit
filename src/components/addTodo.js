import { Button, FormControl, Input, InputLabel } from '@mui/material'
import { addDoc, doc, getDoc, updateDoc} from 'firebase/firestore'
import React, { useState } from 'react'
import todoCollections from '../DBColl'
import db from '../Firebase';
import Todo from '../Todo';
import  '../Todo.css'
const AddTodo = (props) => {
    const [input, setInput] = useState('')
    const [todoId, setId] =useState('')

    const addTodo = (e)=>{
        e.preventDefault()
        addDoc(todoCollections, {todo:input})
        .then(res => console.log(res))
        .catch(e => console.log(e.message))
        setInput('')
      }
     //get the text to the input field
      const updateTodo = async(id)=>{
        const todoRef = doc(todoCollections, id)
        const docSnap = await getDoc(todoRef);
        const docRef = docSnap.data()
        setInput(docRef.todo);
        setId({id})
      }
     
      //update the todo
      const EditTodo = async()=>{
        console.log(todoId.id)
        if(!todoId.id){
           return
        } else{
          const todRef = doc(db, "todos", todoId.id)
          console.log(todRef)
          const updatedata = {
                  todo: input
                };
         await updateDoc(todRef, updatedata).then(res => console.log(res)).catch(e => console.log(e.message))
        
        }
        setInput('')
      }
    
   
  return (
    <div className='main'>
      <FormControl>
      <InputLabel htmlFor="my-input">Add Task</InputLabel>
      <Input 
      value = {input} 
      onChange = {e => setInput(e.target.value)}
        />
      <Button type='submit' disabled ={!input} onClick = {addTodo}  variant="contained">Add Todo
        </Button> 
        <Button type='submit' disabled ={!input} color = 'warning' onClick = {EditTodo}  variant="contained">Update Todo
        </Button>
    </FormControl>

    <ul>
      {props.todos.map(todo =>( <Todo key ={todo.id} text ={todo.data.todo} id ={todo.id} update ={updateTodo} />))}
      </ul>

    </div>
  )
}

export default AddTodo
