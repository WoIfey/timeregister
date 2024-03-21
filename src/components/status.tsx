'use client'
import Edit from '@/components/edit'
import Delete from '@/components/delete'
import Link from 'next/link'
import Image from 'next/image'
import { startTimer, stopTimer } from '@/app/actions'
import { useState } from 'react'
import { formatTimeSpent } from '@/utils/formatTime'

const statuses: { [key: string]: string } = {
	false: 'text-gray-500 bg-gray-100/10',
	true: 'text-green-400 bg-green-400/10',
}
const environments: { [key: string]: string } = {
	Paused: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
	Working: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
}
function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function status({ data }: { data: any[] }) {
	const [timerActive, setTimerActive] = useState(false)

	const handleStart = () => {
		startTimer(data[0].id)
		setTimerActive(true)
	}

	const handleStop = () => {
		stopTimer(data[0].id)
		setTimerActive(false)
	}

	return (
		<div className="bg-slate-900/60 w-full xl:w-1/2 text-white">
			<header className="bg-slate-900 flex items-center justify-between border-b gap-8 border-white/5 px-8 py-5">
				<div className="flex items-center gap-6">
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
					<div className="flex gap-3">
						<h1 className="text-xl font-bold leading-7 truncate max-w-96">
							{data[0].application}
						</h1>
						<p className="font-bold leading-7 italic text-slate-500 text-sm truncate max-w-64">
							made by {data[0].users}
						</p>
					</div>
				</div>
				<Delete id={data[0].id} data={data[0].application} />
			</header>
			<div>
				<div className="m-4 lg:m-8 grid grid-cols-1 gap-x-8 gap-y-10 border-b border-white/5 pb-8 md:grid-cols-3">
					<div>
						<h2 className="text-base font-semibold leading-7">Edit application</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">Not quite right?</p>
					</div>

					<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
						<div className="col-span-full">
							<div>
								<Edit
									id={data[0].id}
									users={data[0].users}
									application={data[0].application}
								/>
							</div>
						</div>
					</div>

					<div>
						<h2 className="text-base font-semibold leading-7">Time spent</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							How much time you have spent working on; {data[0].application}
						</p>
					</div>

					<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
						<div className="col-span-full">
							<div className="mt-2">
								<div>{formatTimeSpent(data[0].time_spent)}</div>
							</div>
						</div>
					</div>

					<div>
						<h2 className="text-base font-semibold leading-7">Status</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">Are you working?!</p>
					</div>

					<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
						<div className="col-span-full">
							<div className="mt-2 flex items-center gap-2">
								<div
									className={classNames(
										statuses[data[0].status.toString()],
										'flex-none rounded-full p-1'
									)}
								>
									<div className="h-2 w-2 rounded-full bg-current" />
								</div>
								<div
									className={classNames(
										environments[data[0].status ? 'Working' : 'Paused'],
										'rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset'
									)}
								>
									{data[0].status ? 'Working' : 'Paused'}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="p-4 lg:p-8 pt-0 lg:pt-0 flex items-center justify-end gap-x-3">
					<form className="flex gap-2">
						<button
							type="button"
							onClick={handleStop}
							className="flex items-center rounded-md bg-red-700 px-2 py-1 text-sm font-semibold shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
						>
							<Image
								src="/pause-circle.svg"
								alt="Stop"
								width={32}
								height={32}
								className="p-1"
							/>
							<span className="mr-2">Stop</span>
						</button>
						<button
							type="button"
							onClick={handleStart}
							className="flex items-center rounded-md bg-green-700 px-2 py-1 text-sm font-semibold shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
						>
							<Image
								src="/play-circle.svg"
								alt="Start"
								width={32}
								height={32}
								className="p-1"
							/>
							<span className="mr-2">{timerActive ? 'Running' : 'Start'}</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
