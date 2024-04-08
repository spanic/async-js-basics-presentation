var countStudents = function (students, sandwiches) {
    let currentIdx = 0;

    for (let i = 0; i < students.length; i++) {
        if (students[i] == sandwiches[i]) {
            currentIdx++;
        } else {
            let numberOfAttempts = students.length - currentIdx;

            while (numberOfAttempts > 0) {
                const mismatchedStudent = students.splice(i, 1);
                students.push(mismatchedStudent);

                if (students[i] == sandwiches[i]) {
                    currentIdx++;
                    break;
                } else {
                    numberOfAttempts--;
                }
            }

            if (numberOfAttempts == 0) {
                break;
            }
        }
    }

    return students.length - currentIdx;
};

var countStudents2ndVariant = function (students, sandwiches) {
    let count = students.length;

    for (let attemptsCount = 0; attemptsCount < students.length; ) {
        if (students[0] == sandwiches[0]) {
            count--;
            students.shift();
            sandwiches.shift();
            attemptsCount = 0;
        } else {
            const mismatchedStudent = students.shift();
            students.push(mismatchedStudent);
            attemptsCount++;
        }
    }

    return count;
};

export { countStudents, countStudents2ndVariant };
