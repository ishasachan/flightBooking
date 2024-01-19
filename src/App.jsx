import React from 'react'
import Header from './components/Header'
import Table from './components/Table'
import Book from './components/Book'



const App = () => {
  return (
    <div className=' bg-[url(../src/assets/banner.jpg)] bg-cover bg-no-repeat'>
   <Header/>

    <section className=' h-screen'>
<Book/>
<Table/>


    </section>
    
    
    </div>
  )
}

export default App