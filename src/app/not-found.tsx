import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='container mx-auto text-center h-screen flex flex-col justify-center items-center'>
      <h2 className='font-editorial text-6xl'>404 Not Found</h2>
      <p>We are sorry, but the page you requested was not found</p>
      <Link href="/" className='p-2 bg-primary rounded-lg mt-5 text-white hover:shadow-md'>Return Home</Link>
    </div>
  )
}