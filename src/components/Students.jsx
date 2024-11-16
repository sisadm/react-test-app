


function Student({name, age}) {
   return age < 21 ? <li>Mature Student: {name} with age of {age}</li> : <li>Student name: {name} and age: {age}</li>

    // if(age < 21){
    //     return (
    //         <li>Mature Student: {name}</li>
    //     )
    // }
    // else{
    //     return (
    //         <li>Student name: {name} and age: {age}</li>
    //     )
    // }
    
}

export default Student