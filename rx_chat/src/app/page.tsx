import { db } from '@/lib/db'
import Image from 'next/image'

export default  async function Home() {
  await db.set( "hello2", "hello2")
  return (
    <div className='text-red-500'> hello </div>
    )
}
