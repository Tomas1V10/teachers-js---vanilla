// Encargado de acceder al localStorage del navegador

export function getDatabase(dbName) {
    const databaseString = localStorage.getItem(dbName);
    const database = JSON.parse(databaseString);
    return database === null ? [] : database; 
}

export function setDatabase(dbName, jsonData) {
    localStorage.setItem(dbName, JSON.stringify(jsonData));
}


