/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {

    let v1 = version1.split(".");
    let v2 = version2.split(".");

    let i = 0;

    while (i < v1.length || i < v2.length) {
        let revision1 = Number(v1[i] || 0);
        let revision2 = Number(v2[i] || 0);

        if (revision1 < revision2) {
            return -1;
        } else if (revision1 > revision2) {
            return 1;
        }

        i++;


    }

    return 0;



};