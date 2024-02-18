import { useEffect, useState } from "react"

export const Eliminar = () => {

    const [zapatos, setZapatos] = useState([])

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

  return (
    <div className="w-full flex flex-col items-center gap-2">
        {
            zapatos?.map(i=>{
                return(
                    <>
                        <div 
                        className="w-[300px] h-[300px] bg-slate-500"
                        key={i.id}>
                            <div className="w-full h-[200px]">
                                <img 
                                className="w-full h-full object-center"
                                src={i.img} alt={`Zapato ${i.marca}`} />
                            </div>
                            <button
                            className="bg-red-600 text-white px-3 py-1" 
                            onClick={()=>handleClick(i.id)}>
                                Eliminar
                            </button>
                        </div>
                    </>
                    
                )
            })
        }
    </div>
  )
}
