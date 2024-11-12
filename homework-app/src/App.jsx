import './App.css';
import Example from './component/header';
import PersonCard from './component/card';
import PersonalForm from './component/form';
function App() {
  return (
    <div className="bg-[dimgray] h-screen ">
      <header className="App-header">
         <Example/>
      </header>
      <body>
        <div className=''>
         <PersonCard/>
         <PersonalForm/>
        </div>
      </body>
    </div>
  );
}

export default App;
