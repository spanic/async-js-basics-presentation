import {
    countStudents,
    countStudents2ndVariant,
} from './1700_number_of_students_unable_to_eat_lunch.js';

describe('validates countStudents', () => {
    test.each([
        { students: [1, 1, 0, 0], sandwiches: [0, 1, 0, 1], expected: 0 },
        {
            students: [1, 1, 1, 0, 0, 1],
            sandwiches: [1, 0, 0, 0, 1, 1],
            expected: 3,
        },
        { students: [1, 1, 1], sandwiches: [0, 0, 0], expected: 3 },
        { students: [1], sandwiches: [0], expected: 1 },
        { students: [0], sandwiches: [0], expected: 0 },
        { students: [1, 0, 1], sandwiches: [0, 0, 0], expected: 2 },
    ])(
        'countStudents($input) should be $expected',
        ({ students, sandwiches, expected }) => {
            expect(countStudents(students, sandwiches)).toBe(expected);
            expect(countStudents2ndVariant(students, sandwiches)).toBe(
                expected
            );
        }
    );
});
