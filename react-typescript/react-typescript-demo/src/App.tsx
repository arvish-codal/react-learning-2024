import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  
  const personName = {
    first: 'Steve',
    last: 'Rogers',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
]

  return (
    <div className="App">
      {/* <Greet name='arvish' messageCount={20} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}

      {/* <Status status='error' /> */}
      
      {/* <Heading>PlaceHolder Children Text</Heading> */}
      
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}

      <Greet name='arvish' isLoggedIn={false} />

      
    </div>
  );
}

export default App;
