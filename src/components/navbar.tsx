import { Button } from "../common/button";

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-8 py-4 border-b border-gray-300 mb-8 sticky top-0 bg-white z-50'>
      <Button href="/" variant="link">
        <h1 className='md:text-2xl text-xl'>ShopiShoes</h1>
      </Button>
      
      <p className='text-xl font-semibold border-l-2 border-gray-300 pl-4'>Administrador</p>
    </header>
  )
}

export default Navbar
