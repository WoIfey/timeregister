'use client'
import Image from 'next/image'

export default function Search({
	onSearch,
}: {
	onSearch: (query: string) => void
}) {
	return (
		<div>
			<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
				<div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
					<div className="relative w-full">
						<Image
							src="/search.svg"
							className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
							alt="Search"
							height={32}
							width={32}
						/>
						<input
							id="search-field"
							className="block h-full w-full border-0 outline-none bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
							placeholder="Search..."
							type="search"
							name="search"
							onChange={e => onSearch(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
