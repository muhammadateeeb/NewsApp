export function Container({ children }) {
  return (
    <section className='flex p-1 flex-col items-center lg:max-w-screen-2xl mx-auto'>
      <div className='w-full'>
        {children}
      </div>
    </section>
  )
}
