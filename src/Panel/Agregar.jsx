import { v4 as uuidv4 } from 'uuid';

export const Agregar = () => {

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
    className="w-full flex flex-col justify-center items-center h-screen gap-3"
    action="">
        <div className="flex flex-col">
            <label htmlFor="marca">Marca</label>
            <input required className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="marca" type="text" /> 
        </div>
        <div className="flex flex-col">
            <label htmlFor="color">Color</label>
            <input required className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="color" type="text" /> 
        </div>
        <div className="flex flex-col">
            <label htmlFor="talla">Talla</label>
            <input required className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="talla" type="text" /> 
        </div>
        <div className="flex flex-col">
            <label htmlFor="img">Url de Imagen</label>
            <input required className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="img" type="text" />  
        </div>
        <button 
        className="bg-green-400 px-5 py-2 text-white hover:bg-green-500 rounded-2xl"
        type="submid">
            Agregar
        </button>
    </form>
  )
}
