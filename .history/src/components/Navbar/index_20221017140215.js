import { BsSunFill } from "react-icons/bs";

export function Navbar() {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-xl'>Guilherme Cardoso</h1>
      <ul className='flex items-center'>
        <li><BsSunFill className='cursor-pointer text-2xl'/></li>
        <li> 
          <a href='#'>Resume</a>
        </li>
      </ul>
    </nav>
  )
}