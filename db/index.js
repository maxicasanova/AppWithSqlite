import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('tasks.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY NOT NULL, category INTEGER NOT NULL, name TEXT, description TEXT NOT NULL, image TEXT, fechaLimite TEXT NOT NULL)`,
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
    description,
    image,
    fechaLimite
) => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO tasks (category, name, description, image, fechaLimite) VALUES (?, ?, ?, ?, ?)`,
                [category, name, description, image, fechaLimite],
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