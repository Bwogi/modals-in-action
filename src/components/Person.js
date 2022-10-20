import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
	CodeBracketIcon,
	EllipsisVerticalIcon,
	FlagIcon,
	StarIcon,
} from '@heroicons/react/20/solid';
import ModalSuccess from './ModalSuccess';
import ModalDeactivate from './ModalDeactivate';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Person(props) {
	const [paid, setPaid] = useState(false);
	const paymentHandler = () => {
		setPaid(true);
	};
	const [deactivate, setDeactivate] = useState(false);
	const activationHandler = () => {
		setDeactivate(true);
	};
	// const buttonHandler = () => {
	// 	console.log(props.name);
	// 	console.log(props.pic);
	// };
	return (
		<div className='px-4 py-5 text-center sm:px-6 rounded-md bg-gray-50 my-4 mb-[100px] mx-[100px] drop-shadow-sm'>
			<div className='flex space-x-3'>
				<div className='flex-shrink-0'>
					<img className='h-10 w-10 rounded-full' src={props.pic} alt='' />
				</div>
				<div className='min-w-0 flex-1'>
					<p className='text-sm font-medium text-gray-900'>
						<a href='#' className='hover:underline'>
							{props.name}
						</a>
					</p>
					<p className='text-sm text-gray-500'>
						<a href='#' className='hover:underline'>
							December 9 at 11:43 AM
						</a>
					</p>
					<button
						onClick={paymentHandler}
						className='text-sm bg-indigo-600 text-white px-4 py-1 rounded-md my-4s '
					>
						Process Payment
					</button>
					{/* {paid ? <ModalSuccess name={props.name} /> : null} */}
					{paid && <ModalSuccess name={props.name} />}
					<button
						onClick={activationHandler}
						className='text-sm bg-red-600 text-white px-4 ml-3 py-1 rounded-md my-4s '
					>
						Deactivate Account
					</button>
					{/* {deactivate ? <ModalDeactivate /> : null} */}
					{deactivate && <ModalDeactivate />}
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
						necessitatibus! Recusandae rem voluptatibus suscipit fugiat
						explicabo numquam maiores nihil accusamus aliquid, molestiae earum
						minima facere? Nostrum dignissimos doloribus voluptatem est.{' '}
					</p>
				</div>
				<div className='flex flex-shrink-0 self-center'>
					<Menu as='div' className='relative inline-block text-left'>
						<div>
							<Menu.Button className='-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600'>
								<span className='sr-only'>Open options</span>
								<EllipsisVerticalIcon className='h-5 w-5' aria-hidden='true' />
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter='transition ease-out duration-100'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-75'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'
						>
							<Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
								<div className='py-1'>
									<Menu.Item>
										{({ active }) => (
											<a
												href='#'
												className={classNames(
													active
														? 'bg-gray-100 text-gray-900'
														: 'text-gray-700',
													'flex px-4 py-2 text-sm'
												)}
											>
												<StarIcon
													className='pr-4 py-1 rounded-md mt-2h-5 w-5 text-gray-400'
													aria-hidden='true'
												/>
												<span>Add to favorites</span>
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href='#'
												className={classNames(
													active
														? 'bg-gray-100 text-gray-900'
														: 'text-gray-700',
													'flex px-4 py-2 text-sm'
												)}
											>
												<CodeBracketIcon
													className='mr-3 h-5 w-5 text-gray-400'
													aria-hidden='true'
												/>
												<span>Embed</span>
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href='#'
												className={classNames(
													active
														? 'bg-gray-100 text-gray-900'
														: 'text-gray-700',
													'flex px-4 py-2 text-sm'
												)}
											>
												<FlagIcon
													className='mr-3 h-5 w-5 text-gray-400'
													aria-hidden='true'
												/>
												<span>Report content</span>
											</a>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</div>
	);
}
