import * as SQLite from 'expo-sqlite';
import { generateUUID } from '../helpers/uuidGenerator';
import { UserData } from '../store/auth/authContextProvider';

const db = SQLite.openDatabase('expense-app.db');

export const createUsersTableIfNotExists = async (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Users (' +
                'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                'email TEXT UNIQUE,' +
                'uuid TEXT UNIQUE,' +
                'name TEXT,' +
                'lastName TEXT,' +
                'accessToken TEXT,' +
                'refreshToken TEXT' +
                ');',
                [],
                (_, result) => {
                    resolve(true);
                },
                (_, error) => {
                    console.log("Error creating table: " + JSON.stringify(error));
                    reject(error);
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

export const logoutCurrentUser = async (userId: number): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE Users SET accessToken = ?, refreshToken = ? WHERE id = ?',
                ['', '', userId],
                (_, result) => {
                    // Success callback
                    if (result.rowsAffected > 0) {
                        resolve(true); // User updated successfully
                    } else {
                        resolve(false); // No user with the specified id found
                    }
                },
                (_, error) => {
                    // Error callback
                    console.log("Error updating user: " + JSON.stringify(error));
                    reject(error);
                    return false; // Prevent transaction from continuing on error
                }
            );
        });
    });
};

export const getLocalUsers = (): Promise<UserData[]> => {
    return new Promise<UserData[]>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM Users',
                [],
                (_, result) => {
                    // Success callback
                    const users: UserData[] = [];
                    const len = result.rows.length;

                    for (let i = 0; i < len; i++) {
                        users.push(result.rows.item(i));
                    }

                    resolve(users);
                },
                (_, error) => {
                    // Error callback
                    console.log('Error getting local users: ' + JSON.stringify(error));
                    reject(error);
                    return false; // Prevent transaction from continuing on error
                }
            );
        });
    });
};

export const createUser = (email: string, name: string, lastName: string, accessToken: string, refreshToken: string): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const userUUID: string = generateUUID();

        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO Users (email, uuid, name, lastName, accessToken, refreshToken) VALUES (?, ?, ?, ?, ?, ?)',
                [email, userUUID, name, lastName, accessToken, refreshToken],
                (_, result) => {
                    // Success callback
                    if (result.rowsAffected > 0) {
                        resolve(true); // User created successfully
                    } else {
                        resolve(false); // Failed to create user
                    }
                },
                (_, error) => {
                    // Error callback
                    console.log('Error creating user: ' + JSON.stringify(error));
                    reject(error);
                    return false; // Prevent transaction from continuing on error
                }
            );
        });
    });
};

export const getAccessToken = () => {

}

export const getRefreshToken = () => {

}

export const updateRefreshTokenByEmail = async (email: string, newRefreshToken: string): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE Users SET refreshToken = ? WHERE email = ?',
                [newRefreshToken, email],
                (_, result) => {
                    // Success callback
                    if (result.rowsAffected > 0) {
                        resolve(true); // Refresh token updated successfully
                    } else {
                        resolve(false); // No user with the specified email found
                    }
                },
                (_, error) => {
                    // Error callback
                    console.log("Error updating refresh token: " + JSON.stringify(error));
                    reject(error);
                    return false; // Prevent transaction from continuing on error
                }
            );
        });
    });
};

export const updateAccessTokenByEmail = async (email: string, newAccessToken: string): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE Users SET accessToken = ? WHERE email = ?',
                [newAccessToken, email],
                (_, result) => {
                    // Success callback
                    if (result.rowsAffected > 0) {
                        resolve(true); // Access token updated successfully
                    } else {
                        resolve(false); // No user with the specified email found
                    }
                },
                (_, error) => {
                    // Error callback
                    console.log("Error updating access token: " + JSON.stringify(error));
                    reject(error);
                    return false; // Prevent transaction from continuing on error
                }
            );
        });
    });
};