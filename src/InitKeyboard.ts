
// import HandClick from "./HandClick";

import ArrayList from "./Number";

//  初始化键盘
export default class  InitKeyboard {

    private beforeHtml: String ;
    private afterHtml: String;

    constructor(before:String, after: String ) {
        this.afterHtml = after;
        this.beforeHtml = before;
    }
    init  () {
        let keyBoard = this.beforeHtml + `
        <div class="ui_key">
            <div class="ui_key_wrap">
        `
        ArrayList.forEach(element => {
            keyBoard += ` <span>`+ element +`</span>`
        });

        keyBoard +=  ` </div></div>` + this.afterHtml
        
        return keyBoard;
    }
}