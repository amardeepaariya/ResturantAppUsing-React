import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';
import User from './User';
import CounterTwo from './components/CounterTwo';


class  App extends Component {
  render(){
    return (
      <div className="App">

        <CounterTwo
         render={(count, incrementCount) => (
         <ClickCounterTwo count={count} incrementCount={incrementCount} />
         )}
         />
         <CounterTwo
         render={(count, incrementCount) => (
         <HoverCounterTwo count={count} incrementCount={incrementCount} />
         )}
         />

        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={ (isLoggedIn) => isLoggedIn ? 'Amardeep' : 'Guest'} /> */}

        {/* <ClickCounter />
        <HoverCounter /> */}

        {/* <FRParentInput /> */}

        {/* <FocusInput /> */}

        {/* <RefsDemo /> */}

        {/* <ParentComp /> */}

        {/* <PureComp /> */}

        {/* <Table /> */}

        {/* <FragmentDemo /> */}

        {/* <LifecycleA /> */}

        {/* <Form /> */}

        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>

        <Inline /> */}

        {/* <Stylesheet primary={true} /> */}

        {/* <NameList /> */}

        {/* <UserGreeting/> */}

        {/* <ParentComponent/> */}

        {/* <Counter/> */}

        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}

        {/* <EventBind></EventBind> */}

      {/* <Message/> */}

        {/* <Greet></Greet>
        <Welcome/> */}
        {/* <Greet name='Amardeep...' heroName='SuperMan'>
        <p>This is children props</p>
        </Greet>
        <Greet name='Ruchi Kumari' heroName='Wonder Women'>
          <button>Action</button>
        </Greet>
        <Greet name='Subham' heroName='Spiderman'></Greet>
        <Hello></Hello>

        <Welcome name='Amardeep...' heroName='SuperMan'/>
        <Welcome name='Ruchi Kumari' heroName='Wonder Women'/>
        <Welcome name='Subham' heroName='Spiderman'/> */}

        <Greet name='Amardeep...' heroName='SuperMan'/>
        <Welcome name='Ruchi Kumari' heroName='Wonder Women'/>

      </div>
    );
  }
}

export default App;
