import { JetView, plugins } from "webix-jet";
import { login } from "models/api.js"
import { format } from "path";
export default class RegView extends JetView {

    config() {
        var ui = {
            type: "clean", paddingX: 5, css: "app_layout", rows: [
                { paddingX: 5, paddingY: 10, css: "webix_shadow_medium", height: 50, template: "XDNA WebWallet - Registgration" },
                {
                    type: "wide", paddingY: 10, paddingX: 5, rows: [
                        {
                            view: "form",
                            id: "reg_form",
                            elements: [
                                { view: "text", label: "Name", name: "name" },
                                { view: "text", label: "Email", name: "email" },
                                { view: "text", type: "password", label: "Password", name: "password" },
                                { type: "clean", template: "Scan code:", height: 30 },
                                { type: "clean", template: `<img class="qrcodeimg" id="qrcode"></img>`, height: 140, width: 135 },
                                { type: "clean", template: "..and enter code from Google Authenticator:", height: 30 },
                                { view: "text", label: "Code", name: "secretcode",id:"secretcodef"},
                                { view: "text", label: "Recovery word", name: "key-word",},
                                {
                                    margin: 5, cols: [
                                        { view: "button", value: "Register", type: "form",click:()=>{$$('reg_form').submit()} },

                                    ]
                                }
                            ],
                            rules: {
                                name: webix.rules.isNotEmpty,
                                email: webix.rules.isEmail,
                                password: webix.rules.isNumber,
                                secretcode: webix.rules.isNotEmpty
                            },
                            on: {
                                "onSubmit": () => {
                                    //check gauth
                                    var code = $$('reg_form').getValues();
                                    var rescheck = login.check_code(code.secretcode, this.code.data.secret);
                                    if (rescheck.status != 200)
                                    //error
                                    {
                                        webix.message({
                                            text: "Secret code incorrect",
                                            type: "error",
                                            expire: 20000,
                                            id: "message1"
                                        });
                                        $$('secretcodef').setValue('');
                                        
                                        return;
                                    }
                                    
                                    else {
                                       if( $$('reg_form').validate()){
                                           code.secret=this.code.data.secret
                                           var resreg=login.register(code);
                                           if(resreg.status)
                                           webix.message({
                                            text: "Error:"+resreg.message,
                                            type: "error",
                                            expire: 20000,
                                            id: "message1"
                                        });
                                        else{
                                            this.app.authdata=resreg;
                                            this.app.show("/top")
                                        }

                                       }

                                    }

                                }
                            }
                        }
                    ]
                }
            ]
        };
        return ui;

    }
    init() {
        login.get_code((t) => {
            document.getElementById("qrcode").src = t.data.imageQrUrl;
            this.code = t;
        });


    }
    chechCode() {

    }
}