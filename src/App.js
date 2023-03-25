import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
