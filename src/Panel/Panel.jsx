import { Link, Route, Routes } from "react-router-dom"
import { UpdateDelete } from "./UpdateDelete"
import { Agregar } from "./Agregar"

export const Panel = () => {
    
  return (
    <main className="flex w-full h-full bg-slate-600 z-20 relative">
        <header className="w-[25%] h-screen bg-slate-950 flex flex-col justify-around items-center sticky top-0">
            <ul className="flex flex-col w-full h-full">
                <li className="text-white w-full h-[50%] flex justify-center items-center fondoImage bg-cover">
                    <Link 
                    className="px-5 py-2 bg-orange-400 hover:bg-orange-500 rounded-2xl"
                    to='/panel/'> Agregar</Link>
                </li>
                <li className="text-white flex w-full h-[50%] justify-center fondoImage2 items-center bg-cover">
                    <Link 
                    className="px-5 py-2 bg-red-400 hover:bg-red-500 rounded-2xl"
                    to='/panel/eliminar'> Eliminar</Link>
                </li>
            </ul>
        </header>
        <article className="w-[75%] h-auto bg-slate-600 relative">
            <Routes>
                <Route path="/" element={<Agregar/>}></Route>
                <Route path="/eliminar" element={<UpdateDelete/>}></Route>
                <Route path="*" element={<Agregar/>}></Route>
            </Routes>
        </article>
    </main>
  )
}
