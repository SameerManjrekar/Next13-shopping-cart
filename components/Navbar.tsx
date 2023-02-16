import Link from 'next/link'
import CartBtn from './CartBtn'

const Navbar = () => {
  return (
    <header className='bg-gradient-to-b from-sky-200 to-sky-50 border shadow p-2 flex justify-between items-center px-9 h-20 w-full sticky top-0'>
      <Link className='text-sky-600 text-4xl' href='/'>Sameer Manjrekar</Link>
      <Link href='/cart'>
        <CartBtn />
      </Link>
    </header>
  )
}

export default Navbar
