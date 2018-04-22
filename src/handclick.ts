
export default class HandClick {
    constructor() {}
    handler(event: Event) {
        console.log(event.target)
    }
    regitertClick(Dom) {
        console.log(!Dom.length)
       if(!Dom.length) {
         Dom.onClick = new HandClick().handler;
       }else {
        for (let index = 0; index < Dom.length; index++) {
            Dom[index].onclick = function(event) {
                new HandClick().handler(event)
            };
        }
       }
    }
}
