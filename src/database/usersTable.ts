import * as SQLite from 'expo-sqlite';
import { generateUUID } from '../helpers/uuidGenerator';


const db = SQLite.openDatabase('yourDatabaseName.db');

export const createUsersTableIfNotExists = async () => {

    const userUUID: string = generateUUID(); 

    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Users (' +
            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'uuid TEXT UNIQUE,' +
            'name TEXT,' +
            'lastName TEXT,' +
            'accessToken TEXT,' +
            'refreshToken TEXT' +
            ');',
        ), 
        (error: any) => {
            console.log("error call back : " + JSON.stringify(error));
            console.log(error);
        }, 
        () => {
            console.log("transaction complete call back ");
        }
    })

}


export const updateAccessToken = () => {

}

export const updateRefreshToken = () => {

}

export const getUserLoggedIn = () => {

}

export const getLocalUsers = () => {`
`}

export const createUSer = () => {

}
