import Status from '@/components/status'
import { getApplication } from '@/utils/handleDatabase'

export default async function Projects({ params }: any) {
	let data = await getApplication(params.id)
	return (
		<div className="bg-slate-950 min-h-dvh flex justify-center">
			<Status data={data} />
		</div>
	)
}
