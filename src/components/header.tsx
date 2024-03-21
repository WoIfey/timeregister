import Image from 'next/image'
import Link from 'next/link'
import { refresh } from '@/app/actions'

export default function header() {
	return (
		<header className="flex items-center justify-between bg-gray-900 border-b border-white/5 px-8 py-5">
			<h1 className="text-base font-semibold leading-7 text-white">
				Applications
			</h1>
			<div className="flex gap-4 z-50">
				<form action={refresh}>
					<button
						type="submit"
						className="h-10 w-10 group inline-flex items-center rounded-md bg-blue-700 p-1 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<Image
							src="/arrows-clockwise.svg"
							alt="Refresh"
							width={32}
							height={32}
							className="p-1"
						/>
						<div className="relative group flex text-[10px] font-medium">
							<span
								className={`pointer-events-none transition-opacity bg-gray-700 px-2 py-1 text-xs rounded-md absolute   
                            -translate-x-3/4 -translate-y-16 group-hover:opacity-100 opacity-0 m-4 mx-auto top-1/2 left-1/2 min-w-max transform`}
							>
								Refresh
							</span>
						</div>
					</button>
				</form>
				<Link
					href={'/new'}
					className="h-10 w-10 group inline-flex items-center rounded-md bg-slate-700 p-1 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					<Image
						src={'/plus.svg'}
						alt="Create"
						width={32}
						height={32}
						className="p-1"
					/>
					<div className="relative group flex text-[10px] font-medium">
						<span
							className={`pointer-events-none transition-opacity bg-gray-700 px-2 py-1 text-xs rounded-md absolute   
                            -translate-x-3/4 -translate-y-16 group-hover:opacity-100 opacity-0 m-4 -ml-0.5 mx-auto top-1/2 left-1/2 min-w-max transform`}
						>
							Create
						</span>
					</div>
				</Link>
			</div>
		</header>
	)
}
