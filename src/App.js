import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from './Components/Navbar/Navbar';
import Information from './Components/Information/Information';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portofolio/Portfolio';
import Layout from './Components/LayoutComponent/Layout';



let Routers = createBrowserRouter([
  {path:'' , element:<Layout/>  ,children:[
    {index:true , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact' , element:<Contact/>}
    // {path:'*' , element:<Notfound/>}
  ]}
])


function App() {
  return (
    <>
    <RouterProvider router = {Routers}></RouterProvider>
    </>
  );
}

export default App;
