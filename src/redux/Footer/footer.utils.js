export const chunksArray = (myArray, chunk_size=4) => {
    let results = [];
        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }
    return results;
}