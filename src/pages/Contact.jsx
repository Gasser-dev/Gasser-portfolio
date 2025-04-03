import ContactMeForm from '../components/ContactMeForm'


const Contact = () => {
  return (
    <section id='contactMe' className='min-h-[60vh] px-3 py-5 bg-gradient-236 from-white from-8.54 z-10 to-[#7D0000] to-70.28 relative overflow-hidden'>
      {/* Feedbacks */}
      <div className='max-w-6xl mx-auto flex md:flex-row flex-col gap-8' >
        <div className='md:w-1/2'>
          <h1 className='font-Inter font-bold text-2xl text-white mb-3'>FeedBacks</h1>
          <div className='w-full h-48 bg-[#f0f0f0] rounded-lg overflow-hidden'>
            <img src="" alt="Photo" className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='md:w-1/2'>
          {/* Contacts Form */}
          <ContactMeForm/>
        </div>
      </div>
    </section>
  )
}



export default Contact