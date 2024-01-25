import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import whatsapp from "../../assets/Social meida/whatsapp.png";
import linkedin from "../../assets/Social meida/linkedin.png";
import instagram from "../../assets/Social meida/instagram.png";
import github from "../../assets/Social meida/github.png";

const ContentSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const socialMedia = [
    {
      key: 1,
      label: "whatsapp",
      img: whatsapp,
      color: "#25d366",
      link: "",
    },
    {
      key: 2,
      label: "linkedin",
      img: linkedin,
      color: "#0077b5",
      link: "",
    },
    {
      key: 3,
      label: "instagram",
      img: instagram,
      color: "#d62976",
      link: "",
    },
    {
      key: 4,
      label: "github",
      img: github,
      color: "#000",
      link: "",
    },
  ];

  const handleFunction = (value) => {
    setHoveredItem(value);
  };

  return (
    <div className='Main'>
      <div className='Type_Animation'>
        <TypeAnimation
          style={{ whiteSpace: 'pre-line', height: '195px', display: 'block', fontSize: '2.5em', fontFamily: "font-mono", fontWeight: "600", }}
          sequence={[
            `Hello 👋 \n This is Karthikeyan... \n React Js Developer...`,
            1000,
            '',
          ]}
          repeat={Infinity}
        />
      </div>

      <div className='Bottom_content text-slate-600 text-sm subpixel-antialiased font-light capitalize font-mono hover:shadow-cyan-500/50'>
        As a React.js developer proficient in UI frameworks, I specialize in crafting robust web applications that seamlessly blend user-friendly interfaces with cutting-edge functionality. Leveraging my expertise in JavaScript and React.js, I bring a passion for creating dynamic and engaging digital experiences to every project. My portfolio showcases a diverse range of applications, highlighting my commitment to delivering innovative solutions that meet both client and user needs.
      </div>
      
      <div className='flex align-middle justify-start mt-10 gap-4'>
        {socialMedia?.map((item, i) => {
          return (
            <div key={item?.key}>
              <img
                src={item?.img}
                alt={item?.label}
                className={`h-[40px] w-[40px] hover:animate-bounce duration-150 ease-in-out opacity-${hoveredItem === item?.key ? '100' : '20'}`}
                onMouseEnter={() => handleFunction(item?.key)}
                
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContentSection;
