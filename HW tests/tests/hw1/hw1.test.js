describe('HomeWork tasks', () => {
    describe('getSumOrMultiByEven', () => {
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                expected: 6,
            },
            {
                a: 1,
                b: 4,
                expected: 5,
            },
            {
                a: 0,
                b: 1,
                expected: 0,
            }
        ];

        testData.forEach(data => {
            const { a, b, expected } = data;

            //When
            const actual = getSumOrMultiByEven(a, b);

            //Then
            it(`should return ${expected} when a = ${a} and b = ${b}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getQuarterByCoordinate', () => {
        //Given
        const testData = [
            {
                x: 1,
                y: 1,
                expected : 1,
            },
            {
                x: 1,
                y: -1,
                expected : 2,
            },
            {
                x: -1,
                y: -1,
                expected : 3,
            },
            {
                x: -1,
                y: 1,
                expected : 4,
            },
        ];

        testData.forEach(data => {
            const { x, y, expected} = data;

            //when
            const actual = getQuarterByCoordinate(x,y);

            //Then
            it(`should return ${expected} when x = ${x} and y = ${y}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getOnlyPositiveNumberSum', () => {
        //GIVEN
        const testData = [
            {

                a: 10,
                b: 20,
                c: 30,
                expected: 60,
            },
            {

                a: -10,
                b: 20,
                c: 30,
                expected: 50,
            },
            {

                a: 10,
                b: -20,
                c: 30,
                expected: 40,
            },
            {

                a: 5,
                b: 6,
                c: -4,
                expected: 11,
            },
            {

                a: -10,
                b: -20,
                c: 30,
                expected: 30,
            },
            {

                a: -10,
                b: -20,
                c: -30,
                expected: 0,
            },
        ];
            testData.forEach(data => {
            const { a, b, c, expected} = data;
            //WHEN
            const actual = getOnlyPositiveNumberSum(a,b,c);
            //THEN
            it(`should return ${expected} when a = ${a}, b = ${b}, c = ${c}`, () => {
            assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getMaxOfAll', () => {
        const testData = [
            //GIVEN
            {
                a: 10,
                b: 5,
                c: 20,
                expected: 1003,
            },
            {
                a: -10,
                b: 5,
                c: 30,
                expected: 28,
            },
            {
                a: -10,
                b: -5,
                c: -25,
                expected: -37,
            },
        ];
        testData.forEach(data => {
            const {a, b, c, expected} = data;
            //WHEN
            const actual = getMaxOfAll(a, b, c);
            //THEN
            it(`should result ${expected} when a = ${a} b = ${b} c = ${c} `, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('getMarkFromRate', () => {
        //GIVEN
        testDate = [

            {
                rate: 0,
                expected: 'F',
            },
            {
                rate: 1,
                expected: 'F',
            },
            {
                rate: 19,
                expected: 'F',
            },
            {
                rate: 20,
                expected: 'E',
            },
            {
                rate: 21,
                expected: 'E',
            },
            {
                rate: 39,
                expected: 'E',
            },
            {
                rate: 40,
                expected: 'D',
            },
            {
                rate: 41,
                expected: 'D',
            },
            {
                rate: 58,
                expected: 'D',
            },
            {
                rate: 59,
                expected: 'D',
            },
            {
                rate: 60,
                expected: 'C',
            },
            {
                rate: 61,
                expected: 'C',
            },
            {
                rate: 62,
                expected: 'C',
            },
            {
                rate: 74,
                expected: 'C',
            },
            {
                rate: 75,
                expected: 'B',
            },
            {
                rate: 75,
                expected: 'B',
            },
            {
                rate: 89,
                expected: 'B',
            },
            {
                rate: 90,
                expected: 'A',
            },
            {
                rate: 91,
                expected: 'A',
            },
            {
                rate: 99,
                expected: 'A',
            },
            {
                rate: 100,
                expected: 'A',
            },
        ];
        testDate.forEach(date => {
            const {rate, expected} = date;
            //WHEN
            const actual = getMarkFromRate(rate);
            //THEN
            it(`should result ${expected} when rate = ${rate}`, () =>
            assert.strictEqual(actual,expected));
        })
    });
    describe('getSumAndCount', () => {

        const testData = [
            {
                num: 100,
                expected: [2550 , 50],
            },
            {
                num: 200,
                expected: [10100 , 100],
            },
            {
                num: 50,
                expected: [650 , 25],
            },
            {
                num: 350,
                expected: [30800, 175],
            },
        ];
            testData.forEach(data => {
            const {num, expected } = data;

            const actual = getSumAndCount(num);

            it(`should return ${expected} from ${num}`, () => {
            assert.deepEqual(actual,expected);
            });
        });
    });
});
