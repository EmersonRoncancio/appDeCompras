import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const Agregar = () => {
    const [Finish, setFinish] = useState({})

    const onSubmit = (e)=>{
        const info = Object.fromEntries(
        new window.FormData(e.target))
        const id = uuidv4();
        const infoFinish = {
            id: id,
            ...info
        }
        console.log(infoFinish)
        fetch('http://localhost:3000/Zapatos',{
            method:'POST',
            body: JSON.stringify(
                infoFinish
            ) ,
            headers: { "content-Type": "application/json"},
        })
        .then(i=> i.json())
        .catch(e=>console.log('Hubo un Error mAni'))
    }

  return (
    <form onSubmit={(e)=>onSubmit(e)}
    className="w-full flex flex-col justify-center items-center"
    action="">
        <label htmlFor="marca">Marca</label>
        <input className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="marca" type="text" />
        <label htmlFor="color">Color</label>
        <input className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="color" type="text" />
        <label htmlFor="talla">Talla</label>
        <input className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="talla" type="text" />
        <label htmlFor="img">Url de Imagen</label>
        <input className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="img" type="text" />
        <button type="submid">
            Agregar
        </button>
    </form>
  )
}
