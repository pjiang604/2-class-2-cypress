import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home</h1>
        <Link href="/about">About</Link>
        <form>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='car' />
          <input type='radio' id='html' name='fav_language' value='radio1' />
        </form>

        <ul>
          <li className='selected'>Apple</li>
          <li className='selected'>Orange</li>
          <li className='selected'>Pear</li>
        </ul>

        <div className='school'>
          Welcome to BCIT
        </div>

        <div className='test'
          style={{
            textDecoration: 'line-through',
            color: 'rgb(217, 217, 217)'
          }}>
          Testing area
        </div>

      </div>
    </main>
  )
}
