import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('tasks.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY NOT NULL, category INTEGER NOT NULL, description TEXT NOT NULL, image TEXT, fechaLimite TEXT NOT NULL)`,
            [],
            () => { resolve() },
            (_, err) => { reject(err) })
        })
    })

    return promise
}

export const insertTask = (
    category,
    name,
    textItem,
    image,
    fechaLimite
) => {
    const promise = new Promise ((resolve, reject) => {
        console.log('entre')
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO tasks (category, name, description, image, fechaLimite) VALUES (?, ?, ?, ?, ?)`,
                [category, textItem, image, fechaLimite],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) }
            )
        })
    })

    return promise
}

export const fetchTasks = () => {
    const promise = new Promise(( resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`SELECT * FROM tasks`,
            [],
            (_, result) => { resolve(result) },
            (_, err) => { reject(err) }
            )      
        })
    })
    return promise
}

export const deleteTaskDB = (id) => {
    const promise = new Promise(( resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`DELETE FROM tasks WHERE id = ?`,
            [id],
            (_, result) => { resolve(result) },
            (_, err) => { reject(err) }
            )      
        })
    })
    return promise
}

export const updateTask = (image, id) => {
    const promise = new Promise(( resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`UPDATE tasks set image=? where id=?`,
            [image, id],
            (_, result) => { resolve(result) },
            (_, err) => { reject(err) }
            )      
        })
    })
    return promise
}