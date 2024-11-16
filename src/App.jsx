import './App.css'
import Student from './components/Students'


function App() {

  const students = [ 
    {"name": "Liam",
      "age": 19}, 
    {"name": "John",
      "age": 22},
    {"name": "Adrian",
      "age": 21},
    {"name": "Dave",
      "age": 20},
  ]
  
  

  return (
    <ul>
      
      {students.map((student, index) => (
        <Student key={index} name={student.name} age={student.age}/>
      ))}
        
    </ul>
  )
}

export default App
