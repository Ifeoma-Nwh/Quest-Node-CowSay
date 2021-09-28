const info = require("./information");

var cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Hello I'm ${info.nom} from ${info.campus} Campus!`,
    e : "><",
    T : "U "
}));