import { Route, Routes, BrowserRouter } from "react-router-dom"

import Main from "./pages/Main"

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