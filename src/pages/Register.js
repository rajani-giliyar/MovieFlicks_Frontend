import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {


  const registerContainer = {
    width: '30%',
    margin: '80px auto 0', // Add margin top while keeping auto margin for centering horizontally
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};


const registerPage = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

const inputStyle = {
    margin: '8px 0', // Add spacing between inputs
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
}

const buttonStyle = {
    margin: '8px 0', // Add spacing between inputs
    padding: '8px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    width: '100%',
    cursor: 'pointer',
}

  const navigate = useNavigate()
  const [data, setData] = useState({
    name : "",
    email : "",
    password : ""
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const { name, email, password } = data
    try {
      const response = await fetch("http://localhost:8000/api/user/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      })
  
      const responseData = await response.json()
  
      if (responseData.error) {
        toast.error(responseData.error)
      } else {
        setData({ name: "", email: "", password: "" })
        toast.success("Registration Successful. Welcome")
        navigate("/login")
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div  style={registerContainer}>
      <form onSubmit={registerUser}  style={registerPage}>
        <label>Name</label>
        <input type='text' placeholder='Enter Name' value={data.name} onChange={(e) => setData({...data,name : e.target.value})}  style={inputStyle}/>
        <label>Email</label>
        <input type='email' placeholder='Enter Email' value={data.email}  onChange={(e) => setData({...data,email : e.target.value})}  style={inputStyle}/>
        <label>Password</label>
        <input type='password' placeholder='Enter Password' value={data.password}  onChange={(e) => setData({...data,password : e.target.value})}  style={inputStyle}/>
        <button type='submit' style={buttonStyle}>Submit</button>
      </form>
    </div>
  )
}

export default Register





