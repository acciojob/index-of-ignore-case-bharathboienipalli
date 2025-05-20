function indexOfIgnoreCase(str, subStr) {
    if (subStr === "") {
        return 0; 
    }
    if (str === "" || subStr.length > str.length) {
        return -1; 
    }
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    return lowerStr.indexOf(lowerSubStr);
}