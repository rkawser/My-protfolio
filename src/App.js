import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Experience from './Components/Experience/Experience';
import ContactForm from './Components/Contact/ContactForm';
import Details from './Components/Details/Details';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
       <Home></Home>
       </Route>
       <Route path='/home'>
       <Home></Home>
       </Route>
       <Route path='/experience'>
      <Experience></Experience>
       </Route>

       <Route path='/contact'>
        <ContactForm></ContactForm>
       </Route>

       <Route path='/about'>
        <About></About>
       </Route>

       <Route path='/blog'>
      <Blog></Blog>
       </Route>

       <Route path='/project/:details'>
       <Details></Details>
       </Route>

       <Route path='*'>
       <NotFound></NotFound>
       </Route>
     </Switch>
     </BrowserRouter>
    
      
    
    </div>
  );
}

export default App;
