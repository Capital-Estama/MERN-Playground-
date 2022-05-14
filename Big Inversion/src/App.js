import logo from './logo.svg';
import './App.css';
import PersonCard from './componets/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"John"} lastName={"Doe"} age={73} hairColor={"blue"}>
            
            
      </PersonCard>
      <PersonCard firstName={"French"} lastName={"Gwan"} age={130} hairColor={"white"} >
            <button>Birthday button for French </button>
            
      </PersonCard>
      <PersonCard firstName={"Ben"} lastName={"Burgaa"} age={22} hairColor={"black"} >
            <button>Birthday button for Ben </button>
      </PersonCard>
      <PersonCard firstName={"Wes"} lastName={"Snipes"} age={23} hairColor={"black"} >
            <button>Birthday button for Wes </button>
      </PersonCard>
    </div>
  );
}

export default App;
