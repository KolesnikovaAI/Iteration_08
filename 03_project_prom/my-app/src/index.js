import React from 'react';//импортируется библиотека React
import ReactDOM from 'react-dom/client';//библиотека ReactDOM, которая предоставляет методы для взаимодействия с DOM или другими словами с HTML-страницей
import './index.css';//импортируются стили, которые применяются ко всему нашему приложению
import App from './App';//React-компонент App из App.js
import reportWebVitals from './reportWebVitals';//функция reportWebVitals, которая позволяет нам получить результаты производительности нашего приложения с использованием различных метрик. Для их измерения используется сторонняя библиотека web-vitals.

const root = ReactDOM.createRoot(document.getElementById('root'));//создаётся корень приложения
root.render(//React.StrictMode инструмент, который в данном случае включает строгий режим для всего приложения
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
