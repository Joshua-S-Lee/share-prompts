import Image from 'next/image'
// This is home, the default page. When going to the base domain this is what will be rendered.
export default function Home() {
  return (
    <main className='bg-green-500'>
      <h1>Hello World</h1>
    </main>
  )
}
