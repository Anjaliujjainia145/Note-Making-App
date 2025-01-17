import {useState} from 'react'
import Passwordinput from '../../components/input/Passwordinput'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const handleSignup = async (e) => {
    e.preventDefault()

    if(!name){
      setError("Please enter your name")
      return
    }

    if(!validateEmail(email)) {
      setError("Please enter a valid email address")
      return 
    }

    if(!password){
      setError("Please enter the password")
      return
    }
    setError("")

  // sign up API 


  }
  return (

    <div className='flex items-center justify-center mt-28'>
      <div className='w-96 border rounded bg-white px-7 py-10'>
        <form
         onSubmit={handleSignup}>
          <h4 
          className='text-2xl mb-7'>
            Sign Up
            </h4>

          <input type="text"
           placeholder='Name'
            className='input-box'
             value={name}
          onChange={(e) =>
           setName(e.target.value)} />






        <input type="text"
           placeholder='Email'
            className='input-box'
             value={email}
          onChange={(e) =>
           setEmail(e.target.value)} />



          <Passwordinput value={password} onChange={e => setPassword(e.target.value)

          }
          />

          {error && <p className='text-red-500 text-sm pb-1'>{error}</p>}

          <button type='submit' className='btn-primary'>
            SIGN UP 
          </button>

          <p className='text-sm text-center mt-4'>Already have an account? { ' '}
            <Link to={'/signup'} 
            className='font-medium text-blue-400 underline'>
            Login
            </Link>
          </p>
        </form>
      </div>
      
    </div>
    
  )
}

export default Signup
