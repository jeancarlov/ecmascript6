
// --------------------------------------
// console.log("---ExtraInfoStart");
// one es6 syntax
// let studentIdOnly = studentRecords.find(studentRecord => studentRecord.id)
// console.log(studentIdOnly);

// regular function expression syntax 
// let studentIdOnlyTest = studentRecords.find(function (studentRecord) {
//   return studentRecord.name;
// });

// console.log(studentIdOnlyTest);

// console.log("---ExtraInfoEnd");


// -------------------------------------

let currentEnrollment = [0123, 0124, 0125, 0126, 0127];

let studentRecords = [
  { id: 0123, name: "Mark", Grade: 2, student: true, paid: true },
  { id: 0124, name: "John", Grade: 2, student: true, paid: true },
  { id: 0125, name: "Michael", Grade: 5, student: true, paid: true },
  { id: 0126, name: "Charles", Grade: 5, student: true, paid: false },
  { id: 0127, name: "Timothy", Grade: 5, student: true, paid: false },
];

// function Declaration  find()method We pass a condition for this method and it selects the first element that matches the condition. If no item matches the condition, then it gives undefined.
function getStudentFromId(studentId) {
  return studentRecords.find(function matchId(record) {
    return record.id == studentId;

  });
}

function printRecords(recordIds) {
  let records = recordIds.map(getStudentFromId);
  console.log("test");
  console.log(records);
  records.sort(function sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
  });
  records.forEach(function printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  });
}



function paidStudnetToEnroll(input) {
    let recordsToEnroll =  
}



// function remindUnpaid(input) {
    
// }


printRecords(currentEnrollment) // working status 200

// console.log(studentInfo.find(name));

// console.log(studentInfos.length); 