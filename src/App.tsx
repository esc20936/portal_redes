import React, { ReactElement, useState } from 'react'
import logo from './logo.svg'
import viteLogo from './vite.svg'
import tailwindLogo from './tailwind.svg'
import BackGround from './bg'
function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="group z-10 absolute bg-white p-20 gap-20 shadow-xl  rounded-xl hover:scale-125 duration-150 ease-in-out hover:bg-indigo-500 hover:text-white">
      <header>
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">Portal proyecto redes</h1>
        </div>
        <p className="pb-3 text-2xl">Si estas viendo esto, somos felices</p>
        
        <p className="pt-3 pb-3 font-black">
          Autores{' '}
          
        </p>
        <div className="flex justify-center flex-col gap-2">
        <p className="font-thin">
          Pablo Escobar
        </p>
        <p className="font-thin">
          Alejandra Guzman
        </p>
        <p className="font-thin">
          Jorge Caballeros
        </p>
        <p className="font-thin">
         Mariana David
        </p>
        </div>
      </header>
      </div>
    <BackGround/>
    </>
  
  )
}

export default App
