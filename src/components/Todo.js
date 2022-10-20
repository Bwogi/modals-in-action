import React, { useState } from 'react';
import Modal from './Modal';

const Todo = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const deleteHandler = () => {
		setModalIsOpen(true);
	};

	return (
		<div className='bg-gray-50 py-4 px-4 my-6 mx-4 rounded-md drop-shadow-md '>
			<h1 className='text-3xl my-3 text-orange-600'>{props.text}</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa harum
				quis illum nulla dolore fuga excepturi quam voluptates hic aperiam,
				assumenda non at veniam quisquam totam provident ad facilis molestias.
			</p>
			<button
				className='bg-green-800 px-4 py-1 text-orange-400 rounded-md mt-4'
				onClick={deleteHandler}
			>
				Delete
			</button>
			{modalIsOpen ? <Modal /> : null}
		</div>
	);
};

export default Todo;
