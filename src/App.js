import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Footers from './components/Footer';
import Header from './components/Headers';
import Main from './components/Main';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Projects/>
      <Resume/>
      <Contacts/>
      <Footers/>
    </div>
  );
}

export default App;
