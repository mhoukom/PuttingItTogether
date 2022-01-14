import './App.css';
import PersonClassComponent from './components/PersonCardComponent';

const people = [
  {lastName: "Doe", firstName: "Jane", age: 45, hairColor: "Black"},
  {lastName: "Smith", firstName: "John", age: 88, hairColor: "Brown"},
  {lastName: "Fillmore", firstName: "Millard", age: 50, hairColor: "Brown"},
  {lastName: "Smith", firstName: "Maria", age: 62, hairColor: "Brown"}
];

function App() {

  return (
  
    <div className="App">
      {people.map((person,index) => {

        return (
          <PersonClassComponent
          key={index} 
          lastName={person.lastName} 
          firstName={person.firstName} 
          age={person.age} 
          hairColor={person.hairColor}/>
        );
      })}
    </div>
  );
}

export default App;
