'use client'
import Image from 'next/image'
import Link from 'next/link'
import { create } from '@/app/actions'
import { useState } from 'react'

export default function add() {
	const [user, setUser] = useState('')
	const [application, setApplication] = useState('')
	const [status, setStatus] = useState<string | null>(null)

	const message = () => {
		try {
			setUser('')
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
						className="w-6 h-6"
					/>
				</Link>
				<h1 className="text-xl font-bold leading-7 italic">Make an application</h1>
			</header>
			<form onSubmit={message} action={create}>
				<div className="m-4 lg:m-8 grid grid-cols-1 gap-x-8 gap-y-10 border-b border-white/5 pb-8 md:grid-cols-3">
					<div>
						<h2 className="text-base font-semibold leading-7">Add Project</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Work on a new project!
						</p>
					</div>

					<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
						<div className="col-span-full">
							<label htmlFor="users" className="block text-sm font-medium leading-6">
								User
							</label>
							<div className="mt-2">
								<input
									type="text"
									id="users"
									name="users"
									placeholder="User"
									maxLength={40}
									value={user}
									onChange={e => setUser(e.target.value)}
									required
									className={`outline-none block w-full rounded-md border-0 bg-white/5 p-2.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6`}
								/>
							</div>
						</div>
						<div className="col-span-full">
							<label
								htmlFor="application"
								className="block text-sm font-medium leading-6"
							>
								Application
							</label>
							<div className="mt-2">
								<input
									type="text"
									id="application"
									name="application"
									placeholder="Project"
									maxLength={40}
									value={application}
									onChange={e => setApplication(e.target.value)}
									required
									className={`outline-none block w-full rounded-md border-0 bg-white/5 p-2.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6`}
								/>
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
