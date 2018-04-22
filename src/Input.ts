
export default class InputText {

    public init () {
        let html = "";
        html += `
                    <div class="pwd-box">
                        <input type="tel" maxlength="6" class="pwd-input" id="pwd-input">
                        <div class="fake-box"><input type="number" readonly="">
                            <input type="number" readonly="">
                            <input type="number" readonly="">
                            <input type="number" readonly="">
                            <input type="number" readonly="">
                            <input type="number" readonly=""></div>
                    </div>
                `
        return html;
    }
}