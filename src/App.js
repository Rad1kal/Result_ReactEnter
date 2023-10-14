import logo from './logo.svg';
import './App.css';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code>
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<div style={{ position: 'fixed', bottom: 0 }}>{new Date().getFullYear()}</div>
			</header>
		</div>
	);
};

// везде используется декларативнй стиль, кроме тегов с атрибутами, там мы уже говорим каким образм мы создаёт элементы, помимо этого компонент приложения тоже императивный, потому что мы говорим компоненту что он должен возвращать в виже разметки
