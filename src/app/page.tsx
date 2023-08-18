import Image from 'next/image'

export default function Home() { 
  return (
    <>
      <header className='bg-gray-200 flex justify-between p-5'>
        <img src='favicon.ico' className='h-10'/>
        {/*This style for nav should be included in Chimera */}
        <nav className='flex gap-4'>
          <a>ChimeraCSS</a>
          <a>Guide</a>
          <a>Documentation</a>
          <a>Open Source</a>
          <a>Contact us</a>
        </nav>
      </header>
      <main className='flex justify-center'>
        <div>
          <h1>This is <a>ChimeraCSS</a></h1>
          <p>The classless CSS-framework for clean, modern and soft design.</p>
        </div>
      </main>
    </>
  )
}
