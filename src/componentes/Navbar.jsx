import image from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";

export const Navbar = () => {
  return (
    <header className="w-full h-[70px] bg-black flex justify-around items-center">
        <Link to='/'>
            <img className='invert w-11 h-10' src={image} alt="" />
        </Link>
        <ul className='flex items-center gap-8'>
            <li className='text-white'>
                <Link to='/'>
                    Inicio
                </Link>
            </li>
            <li className='text-white'>
                <Link to='/tienda'>
                    Tienda
                </Link>
            </li>
            <li className='text-white'>
                <Link to='nosotros'>
                    Sobre Nosotros
                </Link>
            </li>
        </ul>
        <ul>
            <li className='text-white'>
                <Link to='/panel'>
                    <CiLogin size={35}/>
                </Link>
            </li>
        </ul>
    </header>
  )
}
