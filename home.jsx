import React  from 'react';
import "./header.css";


const Task=()=> {
  return(
    <div class="Task">
      <div>
        <p>Title</p>
        <span>Description</span>
        
      </div>
      <button>+</button>





         </div>

  );
}


const home = () => {
  



  
   
  

  return (
    <div className="container">
      <h1> DAILY GOALS </h1>
      <form> 
        <input type="text" placeholder="Title"/>
        <textarea placeholder="Description"></textarea>
        <button type="submit">ADD</button>

      </form>
      <Task />
      
     

     
       
     
     
     
     
    </div>
  );
} 

export default home;

