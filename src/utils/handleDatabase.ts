import { db } from './db'

export async function getData() {
    const data = await db.query('SELECT * FROM applications')
    return data.rows
}
export async function getApplication(id: string) {
    const data = await db.query('SELECT * FROM applications WHERE id = $1', [id])
    return data.rows
}

export async function saveData(users: string, application: string) {
    try {
        await db.query("INSERT INTO applications(users, application) VALUES ($1, $2)", [users, application])
        return 'Saved Quote'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}

export async function updateData(id: string, users: string, application: string) {
    try {
        await db.query("UPDATE applications SET users = $1, application = $2 WHERE id = $3", [users, application, id])
        return 'Updated Quote'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}

export async function deleteData(id: string) {
    try {
        await db.query("DELETE FROM applications WHERE id = $1", [id])
        return 'Deleted Quote'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}

export async function deleteAllData() {
    try {
        await db.query("DELETE FROM applications")
        return 'Deleted All Quotes'
    } catch (error) {
        console.log(error)
        return 'Something went wrong'
    }
}

export async function incrementTimeDB(id: string) {
    try {
        await db.query("UPDATE applications SET time_spent = time_spent + 1, status = true WHERE id = $1", [id]);
        return 'Time incremented and status updated';
    } catch (error) {
        console.log(error);
        return 'Something went wrong';
    }
}

export async function stopTimerDB(id: string) {
    try {
        await db.query("UPDATE applications SET status = false WHERE id = $1", [id]);
        return 'Status set to inactive';
    } catch (error) {
        console.log(error);
        return 'Something went wrong';
    }
}