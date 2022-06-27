import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import CaseList from './Components/CaseList';
import CreateUser from './Components/CreateUser';
import CreateCase from './Components/CreateCase';
import UpdateCase from './Components/UpdateCase';

function App() {
	return (
		<Router>
			<div className='navbar-container'>
				<Navbar />
				<br />
				<Routes>
					<Route path='/' exact element={Login} />
					<Route path='/caseList' exact element={CaseList} />
					<Route path='/update/:id' element={UpdateCase} />
					<Route path='/create' element={CreateCase} />
					<Route path='/RegisterUser' element={CreateUser} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
