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
		 
		 
		 
		 
		 