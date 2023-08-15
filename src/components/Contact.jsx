import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const form = useForm({
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    }
  });
  const { register, handleSubmit, reset, formState } = form
  const { errors, isDirty, isValid } = formState;
  const [loading, setLoading] = useState(false);

  const onError = (errors) => {
    console.log("Form errors", errors);
  };

  const onSubmit = (data) => {
    setLoading(true);
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        setLoading(false);
        toast.success('Email sent successfully!', { autoClose: 2000 }),
        reset();
        console.log(result.text);
      }, (error) => {
        setLoading(false)
        toast.error('Something went wrong! Try again.', { autoClose: 2000 });
        reset();
      });
  };

  return (
    <div
      className={`xl:mt-12 flex justify-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit, onError)}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Name</span>
            <input
              type='text'
              name='user_name'
              {...register('user_name', {
                required: {
                  value: true, message: 'Name is required',
                }
              })}
              placeholder="Name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <p className="text-red-400 text-xs mt-2">{errors.user_name?.message}</p>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='user_email'
              {...register('user_email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <p className="text-red-400 text-xs mt-2">{errors.user_email?.message}</p>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows={7}
              name='message'
              {...register('message', {
                required: {
                  value: true, message: 'Message is required',
                }
              })}
              placeholder='Message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <p className="text-red-400 text-xs mt-2">{errors.message?.message}</p>
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            disabled={!isDirty}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
