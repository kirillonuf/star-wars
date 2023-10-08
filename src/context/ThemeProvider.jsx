import { createContext, useContext, useState } from "react";
import { changeCssVariebles } from "@services/changeCssVariebles";

const ThemeContext = createContext();

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'neitral';


export const ThemeProvider = ({children, ...props})=>{
const [theme, setTheme] = useState(THEME_DARK);

const change = name => {
    setTheme(name);
    changeCssVariebles(name)
}

return (
    <ThemeContext.Provider 
    value={{
        theme,
        change
    }}
    {...props}
    >
        {children}
    </ThemeContext.Provider>
)
}

export default ThemeProvider;

export const useTheme = ()=> useContext(ThemeContext);