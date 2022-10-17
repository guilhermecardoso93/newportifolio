import { BsSunFill } from "react-icons/bs";

export function Navbar() {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
      <h1>Guilherme Cardoso</h1>
      <ul className='flex items-center'>
        <li><BsSunFill/></li>
        <li> 
          <a href='#'></a>
        </li>
      </ul>
    </nav>
  )
}