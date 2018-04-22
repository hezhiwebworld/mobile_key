
import InitKeyboard from "./InitKeyboard"
import HClick from "./handclick";
import Input from "./Input";


// 将键盘挂在页面
let init = new InitKeyboard(new Input().init(), "");
document.body.innerHTML = init.init()

let aspan = document.getElementsByTagName("span");

let Handclick = new HClick();
Handclick.regitertClick(aspan);

console.log(aspan)

