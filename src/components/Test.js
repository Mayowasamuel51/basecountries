// working with input ,
// event  onClick , onSubmit , onChange
import { useState } from "react";
function Test() {
    // const [data, dataInput] = useState({
    //     name: '',
    //     email: '',
    //     state: '',
    //     message:''
    // });
    // // updating the data inputs
    // const inputHandler = (e) => {
    //     dataInput({ ...data, [e.target.name]: e.target.value });    // updating the current value
    //     console.log(e.target.value)
    
    // }
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('');
    const [inputState, setInputState] = useState('');
    const [inputMessage, setInputMessage] = useState('')

    const [result, setResult] = useState('');
    const [errorMessage , setErrorMessage] = useState('')

    const inputNameHandler = (e) => {
        setInputName(e.target.value) // updating current value
    }
    const inputEmailHandler = (e) => {
        setInputEmail(e.target.value) // updating current value
    }
    const inputStateHandler = (e) => {
        setInputState(e.target.value) // updating current value
    }  
    const inputMessageHandler = (e) => {
        setInputMessage(e.target.value)  // updating current value
    }
    const [bool, setBool] = useState(false)
    const database = [
        { name: 'mayowa', email: '@gmail.com' },
        { name: 'lara', email: 'lara@gmail.com' }
    ]
    const sayHello = () => { 
        if (inputName === database[0].name || inputEmail === database[0].email) {
            setResult('this name is found  meet the admin ')
            setBool(true)
        }else {
            setErrorMessage('sorry this name is not found  ')
            setBool(false)
        }
   }

    let content = '';
    if (bool) {
        content = <h1 className="text-info">{result }</h1>
    } else {
        content = <h1 className="text-danger">{errorMessage }</h1>
    }

    return (
        <>
            <div>
                <h1>{inputName }</h1>
            </div>
            <div>
                <input type="text"   name="name"  value={inputName} onChange={inputNameHandler}  className="form-control m-4" placeholder="name" />
                
                <input type="text" value={inputEmail} onChange={inputEmailHandler}   name="email"   className="form-control m-4" placeholder="email" />
                
                <input type="text" className="form-control m-4"   name="state" placeholder="state"/>

                <textarea type="text" name="message" className="form-control m-4" placeholder="message"></textarea>
                
                <div>
                    {      content  }
                </div>
                
                <button className="btn btn-info mt-4 ms-4"   onClick={sayHello}>check info</button>
            </div>
        </>
    )
}


export default Test;