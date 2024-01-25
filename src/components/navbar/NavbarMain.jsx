import React from "react";
import {
    Navbar,
    MobileNav,
    IconButton,
} from "@material-tailwind/react";
import {
    Bars2Icon,
} from "@heroicons/react/24/solid";
import NavList from "./NavList";
import styled from "styled-components";
import ThemeDark from "../theme";


export function NavbarMain({background}) {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <ImageAlign background={background}>
            <ThemeDark />
        <Navbar className="mx-auto w-80 items-center justify-center p-2 lg:rounded-full lg:pl-6 shadow-xl hover:shadow-cyan-500/50"  >
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900 ">
                <div className="flex align-middle justify-center pl-2 lg:block  ">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>
            </div>
            <MobileNav open={isNavOpen} className="overflow-scroll">
                <NavList />
            </MobileNav>
        </Navbar>
        </ImageAlign>
    );
}

const ImageAlign = styled.div`
    /* background-image: url(${props => props.background}); */
    background-repeat: no-repeat;
    background-position: right;
    background-position-x: 8.9in;
    

`

