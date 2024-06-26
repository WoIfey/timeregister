'use client'
import Image from 'next/image'
import { useState } from 'react'
import { update } from '@/app/actions'

export default function UpdateModal({
	application: initialApplication,
	users: initialUsers,
	id,
}: {
	application: string
	users: string
	id: number
}) {
	const [toggleModal, setToggleModal] = useState(false)
	const [application, setApplication] = useState(initialApplication)
	const [users, setUsers] = useState(initialUsers)
	const [updateHover, setUpdateHover] = useState(false)

	const showModal = () => {
		setToggleModal(true)
	}

	const cancel = () => {
		setToggleModal(false)
	}

	const confirm = () => {
		setToggleModal(false)
	}
	return (
		<form onSubmit={() => confirm()} action={update} className="text-white">
			<input name="id" type="hidden" value={id} />
			<div>
				<div className="flex gap-2">
					<Image
						src={'/user.svg'}
						alt="User"
						width={32}
						height={32}
						className="p-1 mb-2"
					/>
					<label
						htmlFor="users"
						className="block pt-1 mb-2 text-base font-medium text-gray-900 dark:text-white"
					>
						User
					</label>
				</div>
				<input
					type="text"
					id="users"
					name="users"
					placeholder="GitHub"
					maxLength={40}
					value={users}
					onChange={e => setUsers(e.target.value)}
					required
					className={`outline-none block w-full rounded-md border-0 bg-white/10 p-2.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
						users.length === 40 ? 'ring-red-500 focus:ring-red-700' : ''
					}`}
				/>
				<div className="mt-2 text-xs">
					<span className={`${users.length === 40 ? 'text-red-500' : ''}`}>
						{users.length}/40
					</span>
				</div>
			</div>
			<div className="mt-4">
				<div className="flex gap-2">
					<Image
						src={'/app-window.svg'}
						alt="App"
						width={32}
						height={32}
						className="p-1"
					/>
					<label
						htmlFor="application"
						className="block pt-1 text-base font-medium text-gray-900 dark:text-white"
					>
						Application
					</label>
				</div>
				<input
					id="application"
					name="application"
					placeholder="Portfolio"
					maxLength={40}
					value={application}
					onChange={e => setApplication(e.target.value)}
					className={`mt-2 outline-none block w-full rounded-md border-0 bg-white/10 p-2.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
						application.length === 40 ? 'ring-red-500 focus:ring-red-700' : ''
					}`}
				/>
				<div className="mt-2 text-xs">
					<span className={`${application.length === 40 ? 'text-red-500' : ''}`}>
						{application.length}/40
					</span>
				</div>
			</div>
			<div className="flex justify-end">
				<button
					type="submit"
					className="flex items-center mt-5 rounded-md bg-blue-700 px-2 py-1 text-sm font-semibold shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
				>
					<Image
						src="/floppy-disk.svg"
						alt="Update"
						width={32}
						height={32}
						className="p-1"
					/>
					<span className="mr-1">Update</span>
				</button>
			</div>
		</form>
	)
}
