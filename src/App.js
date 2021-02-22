import logo from './logo.svg';
import './App.css';

const style = {
  color: "red",
  backgroundColor: "yellow"
}

function App() {
  const person = {
    name: 'Dr. Hafiz',
    job: 'Singer'
  }
  const person2 = {
    name: 'Dr. Hafiz2',
    job: 'Singer2'
  }
  // console.log(person);
  // console.log(person2);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="" style={style}>Test Headings : {person.name + ' ' + person.job}</h1>

        <h1 style={{
          color: "red",
          backgroundColor: "Black",
          fontSize: 25
        }}>Test Headings2 : {person2.name + ' ' + person2.job}</h1>

        <p>Git setup done</p>
        <p>My First Paragraph</p>
      </header>
    </div>
  );
}

export default App;
