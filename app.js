const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    saveToDb(db);
};

const removeFromDb = item => {
    const db = getDb();
    delete db[item];
    saveToDb(db);
}

const saveToDb = db => {
    const dbJson = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJson);
}


const getDb = () => {
    let savedDb = localStorage.getItem('shopping-cart');
    return savedDb ? JSON.parse(savedDb) : {};

    /* if (savedDb) {
        savedDb = JSON.parse(savedDb);
    }
    else {
        savedDb = {};
    }
    return savedDb; */
}

