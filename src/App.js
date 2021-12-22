import logo from './logo.svg';
import './App.css';
import Navigation from './Pages/Shared/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Register from './Pages/Login/Register/Register';
import Gallery from './Pages/Gallery/Gallery';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About nav={true} />} />
						<Route path='/gallery' element={<Gallery />} />

						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
