'use client'
import Image from 'next/image'
import Link from 'next/link'
import { create } from '@/app/actions'
import { useState } from 'react'

export default function add() {
	const [users, setUsers] = useState('')
	const [application, setApplication] = useState('')
	const [status, setStatus] = useState<string | null>(null)

	const message = () => {
		try {
			setUsers('')
			setApplication('')
			setStatus('Application added!')
			setTimeout(() => {
				setStatus('')
			}, 3000)
		} catch (error) {
			setStatus('Failed to add quote.')
		}
	}
	return (
		<main className="bg-slate-900/60 w-full xl:w-1/2 text-white">
			<header className="bg-slate-900 flex items-center border-b gap-8 border-white/5 px-8 py-5">
				<Link
					href={'/'}
					className="inline-flex items-center rounded-md bg-gray-700 p-1.5 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					<Image
						src={'/arrow-left.svg'}
						alt="<-"
						width={32}
						height={32}
						className="p-1"
					/>
				</Link>
				<h1 className="text-xl font-bold leading-7">Create application</h1>
			</header>
			<form onSubmit={message} action={create}>
				<div className="m-4 lg:m-8 grid grid-cols-1 gap-x-8 gap-y-10 border-b border-white/5 pb-8 md:grid-cols-3">
					<div>
						<div className="flex items-center gap-2">
							<Image
								src={'/plus.svg'}
								alt="<-"
								width={32}
								height={32}
								className="p-0.5"
							/>
							<h2 className="text-base font-semibold leading-7">Add Project</h2>
						</div>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Work on a new project!
						</p>
					</div>

					<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
						<div className="col-span-full">
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
						<div className="col-span-full">
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
					</div>
				</div>

				<div className="p-4 lg:p-8 pt-0 lg:pt-0 flex items-end justify-end flex-col gap-x-3">
					<button
						type="submit"
						className="flex items-center rounded-md bg-blue-700 px-2 py-1 text-sm font-semibold shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
					>
						<Image
							src="/plus-circle.svg"
							alt="Start"
							width={32}
							height={32}
							className="p-1"
						/>
						<span className="mr-2">Add Project</span>
					</button>
					{status && <p className="mt-2">{status}</p>}
				</div>
			</form>
		</main>
	)
}
