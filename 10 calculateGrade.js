// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0-59: F

const marks = [61, 90, 87];

const calucateGrade = (marks) => {
  let totalSum = 0;
  let totalSubject = marks.length;
  marks.forEach((mark) => {
    totalSum += mark;
  });
  let average = totalSum / totalSubject;

  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
};

console.log(calucateGrade(marks));
