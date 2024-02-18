import DocumentationContainer from "./pages/documentation/components/DocumentationContainer"
import Home from "./pages/home/components/Home"
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion"


function App() {



  return (

    <main className="">
      
      <motion.div
        className="w-full h-full z-40 bg-custom-primary fixed"
        initial={{ height: "100%" }} animate={{ height: "0" }}
        transition={{ duration: 0.6, delay:0, ease:"easeOut" }}
      /> 
        <section  className=" bg-custom-base " >
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/docs/:id" element={<DocumentationContainer />} />
          </Routes>


        </section >
    </main>






  )
}

export default App
