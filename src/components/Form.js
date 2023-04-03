//useState
import { useState } from 'react';

function Form() {
    const name = 'MAYOWA'
    // const inputUsername = document.getElementById('input').value;
    // const inputPassword = document.getElementById('password').value
    // const arry = [1, 3, 4]
    // const [one, two] = arry;

    const [inputName, setInputName] = useState('')
    const [inputEmail, setEmail] = useState('')
    const [address , setAddress] = useState('')

    let l = 23;
    // event, onChange for input , oncClick  for button's , onSubmit = forms 
    const inputNameHandler = (e) => {
        setInputName(e.target.value)  // This will update the current value
        console.log(e.target.value)
    }
    const inputEmailHandler = (e) => {
        setEmail(e.target.value) // This will update the current value
        console.log(e.target.value)
    }
    const inputAddressHandler = (e) => {
        setAddress(e.target.value) // This will update the current value
        console.log(e.target.value)
    }

    return ( 
        <>
            <form className="container  ms-4">
                <h1>FORM </h1>
                <input type="text" placeholder='name' value={inputName} onChange={inputNameHandler} className="form-control mb-4 "/>
                
                <input type="text" placeholder='email'  value={inputEmail} onChange={inputEmailHandler}  className="form-control mb-4"/>

                
                <input type="text" placeholder='address' value={address} onChange={inputAddressHandler}  className="form-control mb-4"/>

                <button className="btn btn-100 w-100 btn-dark">submit </button>
                <div className='container '>
                    <h1>{inputName}</h1>
                    
                    <h1>{inputEmail}</h1>
                    

                    <h1>{address }</h1>
                </div>
            </form> 
        
        
        </>
    )
}

export default Form;