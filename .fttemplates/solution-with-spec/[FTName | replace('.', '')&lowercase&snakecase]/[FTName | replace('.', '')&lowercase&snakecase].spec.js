import <functionName> from './<FTName | replace('.', '')&lowercase&snakecase>.js';

describe('validates <functionName>', () => {
    test.each([
        { input: , expected:  },
        { input: , expected:  },
        { input: , expected:  },
    ])('<functionName>($input) should be $expected', ({ input, expected }) => {
        expect(<functionName>(input)).toBe(expected);
    });
});
