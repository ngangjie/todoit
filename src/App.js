
import { useEffect, useState } from 'react';
import './App.css'
import { getDocs} from "firebase/firestore";
import AddTodo from './components/addTodo';
import todoCollections from './DBColl';
import  appBar  from './components/appBar';

function App() {
  const [todos, setTodos] = useState([]);
  
 console.log(todos)
  //listen to the database and fetch new tods
 useEffect(() => {
 
  getDocs(todoCollections).then(res => {
    console.log(res)
    const Todos = res.docs.map(doc => ({data: doc.data(), id:doc.id}))
   setTodos(Todos)
  }).catch(e => console.log(e.message))


  }, [])
 
 
  
  return (
    <div className="App">
      <appBar />
      <h1>Hello cleaver programmer</h1>
    
     <AddTodo todos ={todos} />

    </div>
  );
}

export default App;
