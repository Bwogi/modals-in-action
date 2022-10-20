import React from 'react';

const Button = (props) => {
	return (
		<>
			<button
				onClick={props.action}
				className='bg-indigo-600 rounded-md text-white mx-2 px-4 py-1 my-2'
			>
				{props.text}
			</button>
		</>
	);
};

export default Button;
