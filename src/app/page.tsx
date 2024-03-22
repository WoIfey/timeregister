import Applications from '@/components/applications'
import { getData } from '../utils/handleDatabase'

export default async function Home() {
	let data = await getData()
	data.sort((a: any, b: any) => a.id - b.id)
	return (
		<main className="bg-gray-950 min-h-dvh flex justify-center">
			<div className="bg-slate-900/60 w-full xl:w-1/2">
				<Applications data={data} />
			</div>
		</main>
	)
}
