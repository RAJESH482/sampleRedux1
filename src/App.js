import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import ParentComponent from './components/ParentComponent'
import Conditional from './components/Conditional'
import List from './components/List'
import Inline from './components/Inline'
import Form from './components/Form'
import Fragment from './components/Fragment'
import Refs from './components/Refs'
import Hero from './components/ErrorBoundary';
import ErrorBoundary from './components/ErrorBoundary1';
import Get from './components/Get';
import Post from './components/Post'
import UseStateHook from './Hooks/UseStateHook'
import UseStateHook1 from './Hooks/UseStateHook1';
import Effect from './Hooks/Effect';
import DataFetching from './Hooks/DataFetching';
import SimpleReducer from './Reducer/SimpleReducer';
import ComplexReducer from './Reducer/ComplexReducer';
import CakeSelector from './REDUX/CakeExample/CakeSelector';



function App() {
  return (
    <div className="App">
      {/* <Greet name="Rajesh" role="developer"/>
      <Greet name="sandhya" role="software"/>
      <Greet name="Prem" role="fsd"/>
      <Greet name="prem1" role="fsd"/>
      <Welcome name="Rajesh" role="developer"/>
      <Welcome name="sandhya" role="software"/>
      <Welcome name="Prem" role="fsd"/>
      <Welcome name="prem1" role="fsd"/> */}
      {/* <Welcome />
      <Hello /> */}
      {/* <Message /> */}
      {/* <ParentComponent/> */}
      {/* <Conditional /> */}
      {/* <List /> */}
      {/* <Inline /> */}
      {/* <Form /> */}
      {/* <Fragment /> */}
      {/* <Refs /> */}
      {/* <ErrorBoundary>
      <Hero heroname="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname="superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname="Joker"/>
      </ErrorBoundary> */}
      {/* <Get /> */}
      {/* <Post /> */}
      {/* <UseStateHook1 /> */}
      {/* <Effect /> */}
      {/* <DataFetching /> */}
      {/* <ComplexReducer /> */}
      <CakeSelector />
    </div>
  );
}

export default App;
