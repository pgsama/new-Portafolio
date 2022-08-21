import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { PagesRouter } from "../pages/router/PagesRouter"


export const AppRouter = () => {
  return (
    <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PagesRouter />} />
    </Routes >
  )
}
