import { Button, Switch } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

const ThemeDark = () => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <div>
            <Switch
                id="custom-switch-component"
                ripple={false}
                className="h-full w-full checked:bg-[#2ec946]"
                containerProps={{
                    className: "w-11 h-6",
                }}
                circleProps={{
                    className: "before:hidden left-0.5 border-none",
                }}
                onClick={handleThemeSwitch}
                >

            </Switch>
        </div>
    )
}

export default ThemeDark