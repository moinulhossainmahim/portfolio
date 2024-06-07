import { MdCall, MdEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubAlt } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20 select-none">
      <div className='flex flex-col  md:flex-row justify-center gap-10 md:gap-[20%]'>
        <div>
          <h5 className='mb-4'>My Contacts</h5>
          <div className='flex items-center gap-3 mb-2'>
            <MdCall size={20} />
            <p className='font-light'>+8801732748262</p>
          </div>
          <div className='flex items-center gap-3'>
            <MdEmail size={20} />
            <p className='font-light'>moinulhossainmahim@gmail.com</p>
          </div>
        </div>
        <div>
          <h5 className='mb-4'>Follow me on</h5>
          <ul className='flex gap-5'>
            <li>
              <a href="https://www.linkedin.com/in/moinulhmahim" target='_blank'>
                <AiFillLinkedin size={25} className='rounded-full' />
              </a>
            </li>
            <li>
              <a href="https://github.com/moinulhossainmahim" target='_blank'>
                <FaGithubAlt size={25} className='rounded-full' />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/moinulhossainmahim" target='_blank'>
                <BsFacebook size={25} className='rounded-full' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-secondary text-[17px] leading-[30px] text-center mx-0 md:mx-auto">
        &copy; Copyright {new Date().getFullYear()} Moinul Hossain
      </p>
    </footer>
  )
}

export default Footer
