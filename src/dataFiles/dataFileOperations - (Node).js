import * as data from './userData.json';
// let writeData = (jsonData) => {
//     console.log("(Inside Write data Function) {jsonData = }", jsonData);
//     try {
//         Fs.writeFileSync('userData.json', JSON.stringify(jsonData));
//     } catch (e) {}
// };

// let readData = () => {
//     // try {
//     //     let file = fs.readFileSync('userData.json', 'utf8');
//     //     console.log("(Inside Read Data Function) {data = }", file);
//     //     return JSON.parse(file);
//     // } catch (e) {
//     //     console.log("Error: ", e);
//     // }
//     let file = Fs.readFile('userData.json', 'utf8', function callback(err, contents) {
//         console.log("(Inside Read Data Function) {data = }", contents);
//         return JSON.parse(contents);
//     });
//     return file;
// };

//newData ----> String
let ProcessRecords = () => {
    // let var = "name";
    //console.log('(Inside processRecords Funtion) {newData = }', newData);
    // let fileData = [];
    // fileData = readData();
    // let newData = {
    //     empId: "e5000",
    //     firstName: "Manish",
    //     lastName: "jain",
    //     emailId: "manishC@gmail.com",
    // };
    console.log('(Inside processRecords Funtion) {fileData = }', data);
    // console.log('(Inside processRecords Funtion) {newData = }', newData);

    // fileData.push(newData);
    // writeData(fileData);
}

// running processRecord locally - testing
// console.log("hey");
// ProcessRecords();

export default ProcessRecords;