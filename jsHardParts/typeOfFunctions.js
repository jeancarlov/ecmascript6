
// --------------------------------------
// console.log("---ExtraInfoStart");
// one es6 syntax
let studentIdOnly = studentRecords.find(studentRecord => studentRecord.id)
// console.log(studentIdOnly);

// regular function expression syntax 
let studentIdOnlyTest = studentRecords.find(function (studentRecord) {
  return studentRecord.name;
});

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

function printRecords(record) {

    return 
}



function paidStudnetToEnroll(input) {
    
}



function remindUnpaid(input) {
    
}

// console.log(studentInfo.find(name));

// console.log(studentInfos.length); 