export function getCurrentDate(){
    let date = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear();
    return `${date}/${month}/${year}`
}