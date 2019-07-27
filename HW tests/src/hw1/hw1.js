const getSumOrMultiByEven = (a, b) => a % 2 === 0 ? a * b : a + b;

const getQuarterByCoordinate = (x, y) => {
    let quarter;

    if (x > 0 && y > 0) {
        quarter = 1;
    }

    if (x > 0 && y < 0) {
        quarter = 2;
    }

    if (x < 0 && y < 0) {
        quarter = 3;
    }

    if (x < 0 && y > 0) {
        quarter = 4;
    }


return quarter;
};

const getOnlyPositiveNumberSum = (a, b, c) => {
    let x = 0;

    if(a >= 0)
        x += a;

    if(b >= 0)
        x += b;

    if(c >= 0)
        x += c;
    return x;
};

const getMaxOfAll = (a, b, c) => {

const sum = (a + b + c)+3;
const mult = (a * b * c)+3;

if (sum>mult)
    return sum;

else{
    return mult;
}
};

const getMarkFromRate = (rate) => {
    let mark;

    if( rate >= 0 && rate <= 19){
        mark = 'F';
    }

    if( rate >= 20 && rate <= 39){
        mark = 'E';
    }

    if( rate >= 40 && rate <= 59){
        mark = 'D';
    }

    if( rate >= 60 && rate <= 74){
        mark = 'C';
    }

    if( rate >= 75 && rate <= 89){
        mark = 'B';
    }

    if( rate >= 90 && rate <= 100){
        mark = 'A';
    }
    return mark;
};

const getSumAndCount = (num) => {
    let sum = 0;
    let count = 0;

    for (let i = 1; i <= num; i++){
        if (i % 2 === 0){
            sum += i;
            count++;
        }
    }
    return [sum, count];
};


