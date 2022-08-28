import { Route, Routes } from "react-router-dom"
import { HashlinkPages } from "./Hashlinkpages"

export const Routers=()=>{
    return (
        <Routes>
            <Route path="/" element={<HashlinkPages/>}></Route>
        </Routes>
    )
}