
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div className='text-3xl'>Let's Get some Todos with Redux</div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
