import {
    CountUp
} from 'countup.js';

function numbers() {
    const one = new CountUp('one', 18, {
        enableScrollSpy: true,
        scrollSpyOnce: true
    });
    const two = new CountUp('two', 8, {
        enableScrollSpy: true,
        scrollSpyOnce: true
    });
    const three = new CountUp('three', 100, {
        enableScrollSpy: true,
        suffix: '+',
        scrollSpyOnce: true

    });
    const four = new CountUp('four', 4, {
        enableScrollSpy: true,
        scrollSpyOnce: true
    });
    const five = new CountUp('five', 30, {
        enableScrollSpy: true,
        scrollSpyOnce: true
    });
    const six = new CountUp('six', 2015, {
        enableScrollSpy: true,
        useGrouping: false,
        prefix: 'с ',
        scrollSpyOnce: true
    });
}
numbers();