import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Counter } from './components/class/Counter';

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

      {/* <Greet name='arvish' isLoggedIn={false} /> */}

      {/* <Button 
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
      }} /> */}

      {/* <Input value='' handleChange={(event) => console.log(event)} /> */}
      
      {/* <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}

      {/* For Video-106 */}
      {/* <ThemeContextProvider>
         <Box />
      </ThemeContextProvider> */}

      {/* For Video-107 */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      <Counter message='The count value is' />

    </div>
  );
}

export default App;
