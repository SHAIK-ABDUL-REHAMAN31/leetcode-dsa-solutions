/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];

    let parts = path.split("/");

    for(const part of parts){
        if(part === "" || part === "."){
            continue;
        }

        if(part === ".."){
            if(stack.length > 0){
                stack.pop();
            }
        }else{
            stack.push(part);
        }
        
    }

    return "/" + stack.join("/");


};