import React, { useState } from 'react';
import { MenuItem, Typography, Tooltip } from '@material-tailwind/react';
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserTieSolid } from "react-icons/lia";
import skill from "../../assets/icons/creative-thinking.png";
import contact from "../../assets/icons/contact-form.png";
import work from "../../assets/icons/computer.png"


const NavList = () => {
    const [hovered, setHovered] = useState(false)

    // nav list component
    const navListItems = [
        {
            key: 1,
            label: 'home',
            icon: IoHomeOutline,
        },
        {
            key: 2,
            label: 'About me',
            icon: LiaUserTieSolid,
        },
        {
            key: 3,
            label: 'Skills',
            icon: skill,
        },
        {
            key: 4,
            label: 'Projects',
            icon: work,
        },
        {
            key: 5,
            label: 'Contact me',
            icon: contact,
        },
    ];

    return (
        <div>
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center justify-center align-middle">
                {navListItems.map(({ label, icon }, key) => (
                    <Tooltip
                        // key={label}
                        content={label}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <MenuItem className="flex items-center gap-2 lg:rounded-full">
                            {typeof icon === 'string' ? (
                                <div className=''>
                                    <img src={icon} alt={label} className="h-[18px] w-[18px] bg-transparent rounded-full" />
                                </div>
                            ) : (
                                React.createElement(icon, { className: "h-[18px] w-[18px]" })
                            )}
                        </MenuItem>
                    </Tooltip>
                ))}
            </ul>
        </div>
    );
};

export default NavList;
