import { Navbar } from "./componentes/Navbar"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Inicio } from "./routes/Inicio"
import { Tienda } from "./routes/Tienda"
import { Nosotros } from "./routes/Nosotros"
import { Panel } from "./Panel/Panel"

export const App = () => {

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/tienda" element={<Tienda/>}></Route>
            <Route path="/nosotros" element={<Nosotros/>}></Route>
            <Route path="/panel/*" element={<Panel/>}></Route>
            <Route path="*" element={<Inicio/>}></Route>
        </Routes>
    </>
  )
}
