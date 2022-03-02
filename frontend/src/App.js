import './App.css';
import PDFDocument from './PDFDocument';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react'


function App() {
    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route index element={<List />} />
                    <Route path=':filename' element={<PDFDocument />} />
                </Route>
            </Routes>
        </>
    )	
}

function List() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
		axios.get('http://localhost:3001/').then((response) => {
			setFiles(response.data);
				
		});
	}, []);


	return (
		<div>
			<h1>File list</h1>
			<ul>
				{files.map((x, key) => {
					return <li key={key}><Link to={x}>{x}</Link></li>;
				})}
			</ul>
		</div>
	);
}



export default App;
