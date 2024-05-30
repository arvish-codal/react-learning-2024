//import logo from './logo.svg';
import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import DataFetching from './components/DataFetching';
// import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import ComponentC from './components/ComponentC';
import React from 'react';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}

      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={'Arvish'}>
        <ChannelContext.Provider value={'Codal'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}
      <CounterTwo />

    </div>
  );
}

export default App;
