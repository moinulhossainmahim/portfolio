import React, { useState, useEffect } from "react"

import { styles } from "../styles"

import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import { myWords } from "../constants"
import CVDoc from "../assets/Resume_of_Moinul_Hossain.pdf";

const Card = ({ index, text, name, designation, company, image }) => (
  <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full select-none">
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{text}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
)

const CV = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeWidth, setIframeWidth] = useState(0);
  const [iframeHeight, setIframeHeight] = useState(0);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const downloadResume = () => {
    // Implement your download logic here
    // For example, you can create an anchor tag and simulate a click
    const link = document.createElement('a');
    link.href = CVDoc;
    link.download = 'Resume_Of_Moinul_Hossain.pdf';
    link.click();
  };

  const handleResize = () => {
    setIframeWidth(window.innerWidth * 0.8);
    setIframeHeight(window.innerHeight * 0.7);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize(); // Initialize iframe size on mount
  }, []);

  return (
    <div className="bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div variants={textVariant()}>
          <p className={styles.sectionSubText}>For employers</p>
          <h2 className={styles.sectionHeadText}>Resume</h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center select-none`}>
        {myWords.map((myWords, index) => (
          <Card key={myWords.name} index={index} {...myWords} />
        ))}

        <div className="bg-black-200 p-10 rounded-3xl xs:w-[640px] w-full">
          <div className="flex min-[850px]:flex-row flex-col justify-around items-center relative">
            {/* <img src={CVDuncan} alt="CVDuncan" className="w-[250px]" /> */}
            <button
              onClick={openPopup}
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[21px]"
            >
              View Resume
            </button>
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-10">
                <div className="bg-white p-4 rounded">
                  <button
                    onClick={closePopup}
                    className="absolute top-2 right-2 text-gray-500"
                  >
                    Close
                  </button>
                  <iframe
                    src={CVDoc}
                    style={{
                      width: iframeWidth,
                      height: iframeHeight,
                      maxHeight: '90vh',
                      zoom: '100%',
                    }}
                    title="Resume"
                  ></iframe>
                  <button
                    onClick={downloadResume}
                    className="mt-4 bg-tertiary text-white px-4 py-2 rounded"
                  >
                    Download Resume
                  </button>
                  <button
                    onClick={closePopup}
                    className="mt-4 bg-orange-400 text-white px-4 py-2 rounded ml-4 z-100"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(CV, "cv")
