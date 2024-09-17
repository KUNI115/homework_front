import './App.css';
import Example from './component/header';
import PersonCard from './component/card';
import PersonalForm from './component/form';
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Example/>
      </header>
      <body>
        <PersonCard/>
        <PersonalForm/>
      </body>
    </div>
  );
}

export default App;
