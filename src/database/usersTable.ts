import * as SQLite from 'expo-sqlite';
import { generateUUID } from '../helpers/uuidGenerator';
import { UserData } from '../store/auth/authContextProvider';

const db = SQLite.openDatabase('expense-app.db');

export const createUsersTableIfNotExists = async (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Users (' +
                'id INTEGER PRIMARY KEY AUTOINCREMENT,' +  // Remember to use UUID here too.
                'email TEXT UNIQUE,' +
                'uuid TEXT UNIQUE,' +
                'name TEXT,' +
                'lastName TEXT,' +
                'accessToken TEXT,' +
                'refreshToken TEXT' +
                ');',
                [],
                (_, result) => {
                    console.log("Table created successfully.");
                    console.log('Table creation result: ', result)
                    resolve(true);
                },
                (_, error) => {
                    console.log("Error creating table: " + JSON.stringify(error));
                    reject(false);
                    return false; // Prevent transaction from continuing on error
                }
            );
        });
    });
};

export const getLoggedUser = async (): Promise<UserData | null | undefined> => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM Users WHERE accessToken != ?',
                [''],
                (_, result) => {
                    // Success callback
                    if (result.rows.length === 1) {
                        const user: UserData = result.rows.item(0);
                        resolve(user);
                    } else {
                        resolve(null); // No user found with non-empty accessToken
                    }
                },
                (_, error) => {
                    // Error callback
                    console.log("Error retrieving logged user: " + JSON.stringify(error));
                    reject(error);
                    return false; // Prevent transaction from continuing on error
                }
            );
        });
    });
};


export const logoutCurrentUser = async (id: number) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE Users WHERE id == ?',
                [''],
                (_, result) => {
                    // FINISH IMPLEMENTING.
                },
                (_, error) => {
                    // Error callback
                    console.log("Error retrieving logged user: " + JSON.stringify(error));
                    reject(error);
                    return false; // Prevent transaction from continuing on error
                }
            )
        })
    })    
}

export const getLocalUsers = async () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM Users', 
                [],
                (_, result) => {
                    console.log("transaction complete call back ");
                },
                (_, error) => {
                    console.log("error call back : " + JSON.stringify(error));
                    console.log(error);
                    return false;
                },
            )
        })
    })
}

export const createUser = (email: string, name: string, lastName: string, accessToken: string, refreshToken: string) => {
    return new Promise((resolve, reject) => {
        const userUUID: string = generateUUID();

        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO Users VALUES (#1, #2, #3, #4, #5, #6)`, 
                [email, userUUID, name, lastName, accessToken, refreshToken],

                (_, result) => {
                    console.log("transaction complete call back ");
                    // FINISH IMPLEMENTING.
                },

                (_, error) => {
                    console.log("error call back : " + JSON.stringify(error));
                    console.log(error);
                    return false;
                },
            )
        })
    })
}

export const getAccessToken = () => {

}

export const getRefreshToken = () => {

}

export const updateAccessToken = () => {

}

export const updateRefreshToken = () => {

}