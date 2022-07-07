import {React} from './deps.ts';

function App() {
  return (
    <>
      <link rel={'stylesheet'} href={'./static/css/App.css'}/>
      <div className="App">
        <header className="App-header">
          <img src={'./static/images/logo.svg'} className="App-logo" alt="logo"/>
          <p>
            Test deploy deno-create-react-app
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
