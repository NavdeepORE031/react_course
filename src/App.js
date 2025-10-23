
import './App.css';
import Header from './Components/Header'; 
import Footer from './Components/Footer';


function App() {
  let name = "John";
  return (
    <div className="App">
      <Header /> 
      <h1>Hello World {name}</h1>
      <p> I love react programming</p>
      <p> Am schocked by the power of react</p>
      <p>This is a paragraph</p>
      <Footer />
    
    </div>
  );
}

export default App;
