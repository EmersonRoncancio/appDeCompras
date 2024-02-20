import { useEffect, useState } from "react"

export const UpdateDelete = () => {

    const [zapatos, setZapatos] = useState([])
    const [panelUpdate, setPanelUpdate] = useState(false)
    const [upadate, setUpadate] = useState([])
    const [aux, setAux] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/Zapatos')
        .then(i=>i.json())
        .then(i=>setZapatos(i))
        .catch(e=>console.log('Mani, algo le esta fallando'))
    }, [zapatos])
    
    const handleClick = (i)=>{
        console.log(typeof i)
        fetch(`http://localhost:3000/Zapatos/${i}`,{method:"DELETE"})    
    }

    const handleClick2 = (i)=>{
        setPanelUpdate(true)
        setUpadate(i)
        setAux(i)
    }

    const onSubmit = (i)=>{
        const info = Object.fromEntries(
        new window.FormData(i.target))
        const infoFinish = {
            id: aux.id,
            ...info
        }
        fetch(`http://localhost:3000/Zapatos/${aux.id}`,{
            method:'PUT',
            body: JSON.stringify(infoFinish),
            headers:{ "content-Type": "application/json"}
        })
    }

    const handleClick3 = (e)=>{
        setUpadate(e.target.value)
    }

    
  return (
    <div className="w-full grid gap-2 my-4 responsive content-center items-center justify-center justify-items-center ">
        {
            zapatos?.map(i=>{
                return(
                    <>
                        <div
                        className="w-[400px] h-[200px] bg-slate-500 flex rounded-2xl overflow-hidden"
                        key={i.id}>
                            <div className="w-[200px] h-full">
                                <img 
                                className="w-full h-full object-cover object-center"
                                src={i.img} alt={`Zapato ${i.marca}`} />
                            </div>
                            <div className="flex w-[200px] h-full">
                                <div className="w-[50%] h-full flex flex-col justify-around items-center">
                                    <h2 className="text-white">{i.marca}</h2>
                                    <h3 className="text-white">{i.color}</h3>
                                    <h3 className="text-white">{i.talla}</h3>
                                </div>
                                <div className="w-[50%] h-full flex flex-col justify-evenly items-center">
                                    <button
                                    className="bg-red-600 text-white px-3 py-1 w-20 rounded-2xl" 
                                    onClick={()=>handleClick(i.id)}>
                                        Eliminar
                                    </button>
                                    <button
                                    className="bg-orange-400 text-white px-3 py-1 w-20 rounded-2xl" 
                                    onClick={()=>handleClick2(i)}>
                                        Editar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                    
                )
            })
        }
        <div className={`w-[70%] h-[600px] bg-slate-400 absolute ${panelUpdate?'flex flex-col':'hidden'}`}>
            <form onSubmit={(e)=>onSubmit(e)}
            className="w-full flex flex-col justify-center items-center"
            action="">
                <label htmlFor="marca">Marca</label>
                <input value={upadate.marca} onChange={(e)=>handleClick3(e)} placeholder={upadate.marca} className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="marca" type="text" />
                <label htmlFor="color">Color</label>
                <input value={upadate.color} onChange={(e)=>handleClick3(e)} placeholder={upadate.color} className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="color" type="text" />
                <label htmlFor="talla">Talla</label>
                <input value={upadate.talla} onChange={(e)=>handleClick3(e)} placeholder={upadate.talla} className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="talla" type="text" />
                <label htmlFor="img">Url de Imagen</label>
                <input value={upadate.img} onChange={(e)=>handleClick3(e)} placeholder={upadate.img} className="outline-none px-3 py-1 border-b-2 focus:border-b-blue-500 rounded-xl" name="img" type="text" />
                <button type="submid">
                    Agregar
                </button>
            </form>
            <button onClick={()=>setPanelUpdate(false)}>
                Cerrar
            </button>
        </div>
    </div>
  )
}
