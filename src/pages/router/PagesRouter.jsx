import { NavBar } from "../../common/NavBar"
import { Route, Routes } from "react-router-dom"
import { About } from "../About"
import { Skills } from "../Skills"


export const PagesRouter = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
    </Routes>
    </>
  )
}
