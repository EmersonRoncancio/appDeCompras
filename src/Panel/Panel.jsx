import { Link, Route, Routes } from "react-router-dom"
import { Eliminar } from "./Eliminar"
import { Agregar } from "./Agregar"

export const Panel = () => {
    
  return (
    <main className="flex w-full h-full bg-slate-600 z-20 relative">
        <header className="w-[25%] h-screen bg-slate-950 flex flex-col justify-around items-center sticky top-0">
            <ul className="flex flex-col">
                <li className="text-white">
                    <Link to='/panel/'> Agregar</Link>
                </li>
                <li className="text-white">
                    <Link to='/panel/eliminar'> Eliminar</Link>
                </li>
            </ul>
        </header>
        <article className="w-[75%] h-auto bg-slate-600 relative">
            <Routes>
                <Route path="/" element={<Agregar/>}></Route>
                <Route path="/eliminar" element={<Eliminar/>}></Route>
                <Route path="*" element={<Agregar/>}></Route>
            </Routes>
        </article>
    </main>
  )
}
