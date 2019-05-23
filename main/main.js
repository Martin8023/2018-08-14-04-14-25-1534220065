module.exports = function main(num) {
    if (num == null) return null;
    if (num.length == 0) return null;
    var number = ["._.", "|.|", "|_|",
                  "...", "..|", "..|",
                  "._.", "._|", "|_.",
                  "._.", "._|", "._|",
                  "...", "|_|", "..|",
                  "._.", "|_.", "._|",
                  "._.", "|_.", "|_|",
                  "._.", "..|", "..|",
                  "._.", "|_|", "|_|",
                  "._.", "|_|", "..|"];
    var num_len = num.length;
    var first = [];
    var second = [];
    var third = [];

    for(var i=0;i<num_len;i++){
        first.push(number[Number(num.charAt(i))*3]);
        second.push(number[Number(num.charAt(i))*3+1]);
        third.push(number[Number(num.charAt(i))*3+2]);
    }
    return first.join(" ")+"\n"+second.join(" ")+"\n"+third.join(" ")+"\n";
};