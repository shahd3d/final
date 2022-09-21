import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Courss from './components/Courss';
import Footer from './components/Footer';
import M1 from './images/m1.png'
import M2 from './images/m2.jpeg'
import M3 from './images/m3.png'
import M4 from './images/m4.png'
import M5 from './images/m5.png'
function App() {
  return (
    <div>
     <Nav/>
     <div className='container'>
     <Courss text='available' img="https://i.pinimg.com/564x/1f/67/3e/1f673e31e27e03b9a678cfc28a06567c.jpg"/>
     <Courss img="https://i.pinimg.com/564x/5d/ca/d8/5dcad88985bb9cadcf9f995a8a341ea1.jpg"/>
     <Courss text='available' img="https://i.pinimg.com/564x/06/b8/80/06b8802021f3646fc93e725ca17ee93e.jpg"/>
     <Courss text='available' img="https://i.pinimg.com/564x/b8/e2/78/b8e278a527f283423bd713d65158b527.jpg"/>
     <Courss text='available' img="https://i.pinimg.com/564x/ab/2b/9a/ab2b9a34183faac00ada2666e89c00a7.jpg"/>
     <Courss img="https://i.pinimg.com/564x/d4/17/9d/d4179d3dd8d5c82a643fa0b5c566ff17.jpg"/>
     <Courss text='available' img="https://i.pinimg.com/564x/33/03/ef/3303efcc5a6e45d25d6c721c68bd61f8.jpg"/>
     <Courss text='available' img="https://i.pinimg.com/564x/18/6c/56/186c567584672a031ec55132e073c82a.jpg"/>
     <Courss img="https://i.pinimg.com/564x/ec/03/b1/ec03b1b84ea253cee1a29a97197409a5.jpg"/>
     <Courss text='available' img="https://i.pinimg.com/564x/42/80/98/4280982bc7ea0608f7cec9cb51c3f4d5.jpg"/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
