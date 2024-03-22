'use client'
import Link from 'next/link'
import { formatTimeSpent } from '@/utils/formatTime'
import { useEffect, useState } from 'react'
import { refresh } from '@/app/actions'

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

export default function applications({ data }: { data: any[] }) {
	const [timeSpent, setTimeSpent] = useState(data.map(app => app.time_spent))

	useEffect(() => {
		const intervalIds = data.map((app, index) => {
			if (app.status) {
				const id = setInterval(() => {
					setTimeSpent(prevTimeSpent => {
						const newTimeSpent = [...prevTimeSpent]
						newTimeSpent[index] += 1
						return newTimeSpent
					})
				}, 1000)
				return id
			}
			return null
		})

		return () => {
			intervalIds.forEach(id => {
				if (id) clearInterval(id)
			})
		}
	}, [data])

	/* 	useEffect(() => {
		setInterval(() => {
			refresh()
		}, 10000)
	}, [data]) */
	return (
		<ul
			role="list"
			className="divide-y divide-white/5 overflow-y-auto max-h-[calc(100vh-9rem)]"
		>
			{data.map((app, index) => (
				<li
					key={app.id}
					className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8"
				>
					<div className="min-w-0 flex-auto">
						<div className="flex items-center gap-x-3 group">
							<div
								className={classNames(
									statuses[app.status.toString()],
									'flex-none rounded-full p-1'
								)}
							>
								<div className="h-2 w-2 rounded-full bg-current" />
							</div>
							<Link
								href={`/app/${app.id}`}
								className="min-w-0 text-sm font-semibold leading-6 text-white"
							>
								<div className="flex gap-x-2 items-center">
									<p className="truncate font-light">{app.users}</p>
									<p className="text-gray-400">/</p>
									<p className="whitespace-nowrap truncate">{app.application}</p>
									<p className="whitespace-nowrap text-gray-600 text-xs">
										{new Date(app.created_at).toLocaleString()}
									</p>
									<span className="absolute inset-0" />
								</div>
							</Link>
						</div>
						<div className="mt-3 flex items-center text-xs leading-5 text-gray-400">
							<div
								className={classNames(
									environments[app.status ? 'Working' : 'Paused'],
									'rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset'
								)}
							>
								{app.status ? 'Working' : 'Paused'}
							</div>
							<span className="text-white ml-2">
								{formatTimeSpent(timeSpent[index])}
							</span>
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}
