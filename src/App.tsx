import { Route, Routes, BrowserRouter } from "react-router-dom"

import Main from "./pages/Main"

import './reset.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App