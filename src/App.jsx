
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  const greet = "¡Welcome back, dear reader!"
  return (
    <>
      <main className='w-full h-screen bg-slate-300'>
        <NavBar/>
        <ItemListContainer greeting={greet}/>
      </main>
    </>
  )
}

export default App
