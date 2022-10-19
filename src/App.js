import './App.css';
import logo from './assets/LOGO.png'
import TaskList from './components/TaskList';


function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          src={logo}
          className='logo'
          alt='logo task-list'
        />
      </div>
      <div className='tasklist-container'>
        <h1> MY TASKS </h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
