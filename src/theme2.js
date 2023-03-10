import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Theme2(){
    const context = useContext(ThemeContext)
    return (
        <h1 className={context.theme}>This is my duy thai</h1>
    )
}

export default Theme2