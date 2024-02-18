import { Link, Route, Routes } from "react-router-dom"
import { Eliminar } from "./Eliminar"
import { Agregar } from "./Agregar"

export const Panel = () => {
    
  return (
    <main className="flex w-full h-screen bg-black">
        <header className="w-[25%] h-full bg-slate-950">
            <ul className="flex flex-col">
                <li className="text-white">
                    <Link to='/panel/agregar'> Agregar</Link>
                </li>
                <li className="text-white">
                    <Link to='/panel/eliminar'> Eliminar</Link>
                </li>
            </ul>
        </header>
        <article className="w-[75%] h-full bg-slate-600">
            <Routes>
                <Route path="/agregar" element={<Agregar/>}></Route>
                <Route path="/eliminar" element={<Eliminar/>}></Route>
            </Routes>
        </article>
    </main>
  )
}
