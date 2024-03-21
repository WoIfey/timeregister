'use client'
import Image from 'next/image'
import { useState } from 'react'
import { remove } from '@/app/actions'

export default function DeleteModal({ id, data }: { id: number; data: any[] }) {
	const [toggleModal, setToggleModal] = useState(false)

	const showModal = () => {
		setToggleModal(true)
	}

	const cancel = () => {
		setToggleModal(false)
	}

	const confirm = () => {
		setToggleModal(false)
		window.location.href = '/'
	}
	return (
		<>
			<div className="z-10 text-white">
				<button
					onClick={showModal}
					className="flex items-center rounded-md bg-red-700 px-2 py-1 text-sm font-semibold shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
				>
					<Image
						src="/trash.svg"
						alt="Delete"
						width={32}
						height={32}
						className="p-1"
					/>
					<span className="mr-2">Delete</span>
				</button>
			</div>
			{toggleModal && (
				<div className="text-white">
					<div className="z-50 fixed inset-0 bg-black opacity-90"></div>
					<div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full inset-0">
						<div className="relative p-4 w-full max-w-md max-h-full">
							<div className="relative bg-white rounded-lg shadow dark:bg-gray-900">
								<div className="p-4 md:p-5 text-center">
									<p className="mb-3 text-lg font-normal text-white break-all">
										Are you sure you want to delete{' '}
										<span className="font-bold">{data}</span>?
									</p>
									<div className="flex justify-center items-center gap-2">
										<form onSubmit={() => confirm()} action={remove}>
											<input name="id" type="hidden" value={id} />
											<button
												type="submit"
												className="h-10 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
											>
												Yes, I'm sure
											</button>
										</form>
										<button
											onClick={cancel}
											type="button"
											className="h-10 rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
										>
											No, cancel
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
