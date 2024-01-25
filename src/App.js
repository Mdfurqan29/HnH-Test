import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import SliderCards from "./components/SliderCards/SliderCards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
