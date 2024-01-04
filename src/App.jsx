/* eslint-disable react/jsx-key */
import './App.css';
import Todo from './todo';
import Actor from './Actor';
import Singers from './singers';
import BookStore from './BookStore';


function App() {

  const books = [
    { id: 1, name: "physics", price: 100 },
    { id: 2, name: "Math", price: 200 },
    { id: 3, name: "Chemistry", price: 300 },
    { id: 4, name: "Biology", price: 400 },
  ]

  const actors = ["sakib", "Raj", "josim", "Rubel", "Salman sha"];
  const singers = [
    { id: 1, name: "Dr. Mahfuzur Rahman", age: 55, },
    { id: 2, name: "Eva Rahman", age: 38, },
    { id: 3, name: "Shuvro Dev", age: 58, },
    { id: 4, name: "Prithom", age: 28, },
  ]

  return (
    <div>
      <h1 className='person'>Hello</h1>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }
      <Actor name="Bapparaj"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo
        task="Learn React"
        isDone={true}>
      </Todo>
      <Todo
        task="Explore Code Concepts"
        isDone={false}>
      </Todo>
      <Todo
        task="Try JSX"
        isDone={true}>
      </Todo> */}
      {/* <Person grade="7" score="99"></Person>
      <Person grade="8" score="98"></Person>
      <Person grade="9" score="97"></Person>
      <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="watch" price="3000"></Device> */}
    </div>
  )
}

function Person({ grade, score }) {
  console.log({ grade, score });
  const developerStyle = {
    border: "2px solid purple",
    borderRadius: "10px",
    padding: "10px"
  }
  return (
    <div>
      <h3 style={developerStyle} className='person'>I am a person</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Device(props) {
  return (
    <h2>This device: {props.name} price: {props.price} </h2>
  )
}

export default App
