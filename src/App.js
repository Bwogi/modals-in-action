import './App.css';
import Person from './components/Person';
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Home from './components/Home'
// import Modal from './components/Modal';
// import Backdrop from './components/Backdrop';
import {Route, Switch} from 'react-router-dom'

function App() {
	return (
		// <div className='bg-gradient-to-r from-indigo-500 to-red-500 ...'>
		// 	{/* <Todo text='Hello world' />
		// 	<Todo text='this is a reactjs project' />
		// 	<Todo text='interesting stuff happening here' /> */}
		// 	<Navbar />

		// 	<Person
		// 		name='Andrew Bwogi'
		// 		pic='https://images.unsplash.com/photo-1649057349440-38c14e985208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGUlMjBwaWN0dXJlJTIwYm95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
		// 	/>
		// 	<Person
		// 		name='Kurt Bwogi'
		// 		pic='https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
		// 	/>
		// 	<Person
		// 		name='Glaydah Bwogi'
		// 		pic='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		// 	/>
		// 	<Detail />
		// 	<Footer />
		// </div>
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/person' component={Detail} />
				<Route exact path='/detail' component={Person} />
				<Route exact path='/todo' component={Todo} />
			</Switch>
		</div>
	);
}

export default App;
