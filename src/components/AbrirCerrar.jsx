import React from 'react';
import { ToastContainer, toast } from "react-toastify";

const Msg = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
)

export default function OpenClose(){
  const displayMsg = () => {
    toast(<Msg />) 
    // toast(Msg) would also work
  }

  return (
  <div>
    <button onClick={displayMsg}>Click me</button>
    <ToastContainer />
  </div>
);
}