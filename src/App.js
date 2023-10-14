import logo from './logo.svg';
import './App.css';
import React from 'react';

export const App = () => {
	return /*#__PURE__*/ React.createElement(
		'div',
		{
			className: 'App',
		},
		/*#__PURE__*/ React.createElement(
			'header',
			{
				className: 'App-header',
			},
			/*#__PURE__*/ React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			/*#__PURE__*/ React.createElement(
				'p',
				null,
				'Edit ',
				/*#__PURE__*/ React.createElement('code', null, 'src/App.js'),
			),
			/*#__PURE__*/ React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			/*#__PURE__*/ React.createElement(
				'div',
				{
					style: {
						position: 'fixed',
						bottom: 0,
					},
				},
				new Date().getFullYear(),
			),
		),
	);
};

// везде используется декларативнй стиль, кроме тегов с атрибутами, там мы уже говорим каким образм мы создаёт элементы, помимо этого компонент приложения тоже императивный, потому что мы говорим компоненту что он должен возвращать в виже разметки
