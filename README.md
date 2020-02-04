## ########################################################### ##
			*** preparing project ***
## ########################################################### ##

1. console:
	create-react-app calculator
	cd calculator
	npm i --save sass node-sass semantic-ui-css redux react-redux redux-thunk
	
	### *** Extend ESLint configuration ***  
		npm i eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort prettier --save-dev
		add file `.eslintrc` to `calculator` directory
	
2. Delete all from `src`

3. Create `src/index.js`:
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './components/App';
    import './index.scss';
	
4. Create `src/index.scss`, `src/components/App.scss`, `src/components/App.js`:
    import React from 'react';
    import './App.scss';
    const App = () =>{
        return( <div>App</div> )
    };
    export default App;
	
5. npm start

6. Add `css`:
	## Edit `src/index.js`:
		import "semantic-ui-css/semantic.min.css";
	## Edit `src/components/App.js`:
		return (
			<div className="ui container grid App">
				<div className="ui row">
					<div className="column ten wide">Left Part</div>
					<div className="column six wide">Right Part</div>
				</div>
			</div>
		);
	## Edit `src/components/App.scss`:
		.App{
			margin: 5px !important;
			.column{
				border: 1px solid lightgray;
				padding: 10px;
			}
		}
		
7. Create `src/reducers/index.js`:
	## если нет данных для передачи, мы все-равно должны что-то передавать.
	## Поэтому добавлем `dummy reducers`:
    import { combineReducers } from 'redux';
	export default combineReducers({
		dummyKey: 'replaceMe'
	});		
		
8.  Edit  `src/index.js`:
    import { Provider } from 'react-redux';
    import { applyMiddleware, createStore } from 'redux';
    import reducers from './reducers';
	import thunk from "redux-thunk";	
	
	const store = createStore(reducers, applyMiddleware(thunk));
	
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
		document.querySelector("#root")
	);		
		
9. Create `src/actions/index.js`

10. Create `src/actions/types.js`:
	## здесь будут храниться все константы, которые мы используем 
	## в наших `action creators` & `reducers`
	
11. Create `src/components/LeftPart.scss`, `src/components/LeftPart.js`:
	import "./LeftPart.scss";

	import React, { Component } from "react";

	class LeftPart extends Component {
	  render() {
		return <div className="LeftPart">Left Part</div>;
	  }
	}
	export default LeftPart;

12. Create `src/components/RightPart.scss`, `src/components/RightPart.js`:
	import "./RightPart.scss";

	import React, { Component } from "react";

	class RightPart extends Component {
	  render() {
		return <div className="RightPart">Right Part</div>;
	  }
	}
	export default RightPart;

13. Edit `src/components.App.js`:
	// импортируем компоненты
    import LeftPart from './LeftPart';
	import RightPart from './RightPart';
	...
	return (
		<div className="ui container grid App">
		  <div className="ui row">
			<div className="column ten wide"><LeftPart /></div>
			<div className="column six wide"><RightPart /></div>
		  </div>
		</div>
	);
		 
		 
## ########################################################### ##
		2.	*** add actions, reducers ***
## ########################################################### ##		 
		 
	
2.1. 	Edit `src/actions/types.js`:
		## здесь будут храниться все константы, которые мы используем 
		## в наших `action creators` & `reducers`:
		export const IS_RENT = "IS_RENT";
		export const PROPERTY_VALUE = "PROPERTY_VALUE";
		export const DOWN_PAYMENT = "DOWN_PAYMENT";


2.2.	Edit `src/actions/index.js`:
		## добавляем `actions`
		import { DOWN_PAYMENT, IS_RENT, PROPERTY_VALUE } from "./types";
		export const getRentValue = value => {
			return {
				type: IS_RENT,
				payload: value
			};
		};

		export const getPropertyValue = value => {
			return {
				type: PROPERTY_VALUE,
				payload: value
			};
		};

		export const getDownPayment = value => {
			return {
				type: DOWN_PAYMENT,
				payload: value
			};
		};

2.3.	Edit `src/components/LeftPart.js`:
		import { connect } from "react-redux";
		import { getDownPayment, getPropertyValue,getRentValue } from "../actions";  // look at `src/actions/index.js`
		...
		## поскольку у нас еще нет функции `mapStateToProps`, первым параметром передаем `null`
		export default connect(null,{ getDownPayment, getPropertyValue,getRentValue })(LeftPart);
		
2.4.	Create `src/reducers/rentReducer.js`:
		export default (state = 500, action) => {
		  switch (action.type) {
			// see to `src/actions/index.js`
			case "IS_RENT":
			  return action.payload;
			default:
			  return state;
		  }
		};
		
2.5.	Create `src/reducers/propertyValueReducer.js`:
		export default (state = 50000, action) => {
		  switch (action.type) {
			// see to `src/actions/index.js`
			case "PROPERTY_VALUE":
			  return action.payload;
			default:
			  return state;
		  }
		};
		
2.6.	Create `src/reducers/downPaymentReducer.js`:
		export default (state = 2500, action) => {
		  switch (action.type) {
			// see to `src/actions/index.js`
			case "DOWN_PAYMENT":
			  return action.payload;
			default:
			  return state;
		  }
		};

2.7. Edit `src/reducers/index.js`:
		##Это метод, который позволяет вместо создания одного огромного reducer для всего состояния приложения сразу,
		## разбивать его на отдельные модули.
		import { combineReducers } from "redux";			

		import downPaymentReducer from "./downPaymentReducer";
		import propertyValueReducer from "./propertyValueReducer";
		import rentReducer from "./rentReducer";

		export default combineReducers({
		  rentValue: rentReducer,
		  propertyValue: propertyValueReducer,
		  downPayment: downPaymentReducer
		});
		
2.8.	Edit `src/components/LeftPart.js`:
		## add function `mapStateToProps`:
		## //  `state.***` - значение состояния по ключу из `combineReducers` (`src/reducers/index.js`)
		const mapStateToProps = state => {
		  return {
			rentValue: state.rentValue,
			propertyValue: state.propertyValue,
			downPayment: state.downPayment
		  };
		};
		## data from `src/actions/index.js`
		export default connect(mapStateToProps, {
			getRentValue,
			getPropertyValue,
			getDownPayment
		})(LeftPart);

2.9.	Edit `src/components/LeftPart.js`:
		render() {
			return (
			  <div className="LeftPart">
				<div>isRent: {this.props.rentValue}</div>
				<div>isPropertyValue:{this.props.propertyValue} </div>
				<div>isDownPayment: {this.props.downPayment}</div>
			  </div>
			);
		}







