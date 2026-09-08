/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

    let write = 0;
    let read = 0;

    while (read < chars.length) {

        let current = chars[read];
        let count = 0;


        while (read < chars.length && chars[read] === current) {
            read++;
            count++;
        }


        chars[write] = current;
        write++;

        if (count > 1) {
            let countString = String(count);

            for (let digit of countString) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write;
};