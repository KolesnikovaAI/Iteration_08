/*import logo from './logo.svg';  //импорт логотипа из ./logo.svg 
import './App.css'; //импорт CSS, связанный с нашим компонентом

function App() {
  return ( //функция возвращает React-элементы для отображения их на странице.
  //После return внутри круглых скобках мы описываем, по сути, HTML, который будет отображать этот компонент на странице. 
  //Но на самом деле это не HTML, а JSX – специальное расширение языка JavaScript, с помощью которого мы производим элементы.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  );
}

export default App; //инструкция export default App делает компонент App доступным для других модулей
*/

import './App.css';

function App() {
  return (
    <div className="App">Hello, world!</div>
  );
}

export default App;