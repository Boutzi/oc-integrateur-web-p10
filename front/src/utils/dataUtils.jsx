export const cleanData = (data, filters) => {
    let dataFiltered = [];
    data.forEach(element => {
        let newObject = new Object();
        filters.forEach(filter => {
            newObject[filter] = element[filter];
        })
        dataFiltered.push(newObject);
    });
    return dataFiltered;
}