import DocumentationContainer from "./pages/documentation/components/DocumentationContainer"
import Home from "./pages/home/components/Home"
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <main className=" bg-custom-base ">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/docs/:id" element={<DocumentationContainer />} />
      </Routes>


    </main>

  )
}

export default App
