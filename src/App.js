// import logo from './logo.svg';
import './App.css';
// import {Header } from './containers';
// import { CTA, Brand, Navbar } from './component';
import Navbar from './component/Navbar/Navbar';
import Header from './containers/Header/Header';


const App = () => (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      {/*<Brand />*/}
      {/*<CTA />*/}
    </div>
);

export default App;
