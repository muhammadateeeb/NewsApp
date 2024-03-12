export function Header() {
  return (
    <header className='mb-9 p-1 w-auto bg-[#fefffe]'>
      <div className='pb-9 flex items-center justify-around lg:max-w-screen-2xl mx-auto'>
        <div className='size-16'>
          <a href='#' target='_blank' rel='nooperner noreferrer' className='flex items-center text-[#2B2D42] font-bold'>
            <img src='public/ateeb.png' alt='image' />
            ATEEB
          </a>
        </div>
        <div>
          <ul className='flex'>
            <li className='text-[#2B2D42] mx-2 font-bold'>
              <a href='/'>
                START
              </a>
            </li>
            <li className='text-[#2B2D42] mx-2 font-bold'>
              <a href='/'>
                Current Affairs
              </a>
            </li>
            <li className='text-[#2B2D42] mx-2 font-bold'>
              <a href='/'>
                Live 🔴
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
