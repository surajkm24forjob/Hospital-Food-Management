
import { Navbar } from '../src/components/Navbar'
import LoginForm from './components/LoginForm'

function App() {
  

  return (
    <>
    <div className="h-auto flex flex-col">
    <Navbar/>
    </div>
    <div className="flex-grow flex justify-center items-center">
    <LoginForm/>
    </div>
   
    </>
  )
}

export default App
