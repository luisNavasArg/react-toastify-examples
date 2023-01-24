import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function Tosty(){
    let saludos = ["Hola","wello","Hi","Epale","cómo te va?"]
    const notify = () =>{
    saludos.forEach(element => {
       toast(element);
    });
  }

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
  export default Tosty