import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { useRef } from 'react'
function ContactMeForm() {
  const email = useRef()
  const message = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_34fn40d', 'template_56u3f2t', e.target, 'jyqkAX7rYVooxtj97')
      .then(() => {
        e.target.reset()
        toast.success('Message sent successfully')
      })
  }
  return (
<form onSubmit={sendEmail} className='flex flex-col w-full bg-black/10 backdrop-blur-md rounded-xl p-6 shadow-lg gap-4'>
  <h2 className='font-Inter text-white font-bold text-2xl text-center'>Contact Me</h2>
  
  <div className='flex flex-col gap-2'>
    <label className={style.label}>Email:</label>
    <input type="email" placeholder='Enter your Email' ref={email} name='email_from' className={style.input} required />
  </div>

  <div className='flex flex-col gap-2'>
    <label className={style.label}>Inbox:</label>
    <textarea className={style.input} name='message' ref={message} placeholder='Message' rows="4" required></textarea>
  </div>

  <div className='flex justify-center'>
    <button type="submit" className='w-full bg-white text-center py-2 rounded-full border border-white transition-all font-Inter hover:bg-transparent cursor-pointer hover:text-white text-[#861616]'>
      Send
    </button>
  </div>
</form>

  )
}
const style = {
    label: "font-Inter text-white font-bold text-md",
    input: "rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-white/50"
  }
export default ContactMeForm