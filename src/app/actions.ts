"use server"
import { deleteData, saveData, updateData, deleteAllData, incrementTimeDB, stopTimerDB } from "@/utils/handleDatabase"
import { revalidatePath } from "next/cache"

export const create = async (formData: FormData) => {
    const users = formData.get('users') as string
    const application = formData.get('application') as string
    await saveData(users, application)
    revalidatePath('/')
}

export const update = async (formData: FormData) => {
    const id = formData.get('id') as string
    const application = formData.get('application') as string
    const users = formData.get('users') as string
    await updateData(id, users, application)
    revalidatePath('/')
}

export const remove = async (formData: FormData) => {
    const id = formData.get('id') as string
    await deleteData(id)
    revalidatePath('/')
}

export const removeAll = async () => {
    await deleteAllData()
    revalidatePath('/')
}

export const refresh = async () => {
    revalidatePath('/')
}

const timerIds = new Map<string, NodeJS.Timeout | null>()

export const startTimer = async (id: string) => {
    if (timerIds.has(id)) {
        const existingTimer = timerIds.get(id)
        if (existingTimer) {
            clearInterval(existingTimer)
            timerIds.set(id, null)
        }
    }

    const timer = setInterval(async () => {
        await incrementTimeDB(id)
        revalidatePath('/')
    }, 1000)
    timerIds.set(id, timer)
    revalidatePath('/')
}

export const stopTimer = async (id: string) => {
    if (timerIds.has(id)) {
        const timer = timerIds.get(id)
        if (timer) {
            clearInterval(timer)
            timerIds.set(id, null)
            await stopTimerDB(id)
            revalidatePath('/')
        }
    }
}