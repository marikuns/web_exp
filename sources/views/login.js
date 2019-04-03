import {JetView} from "webix-jet";

export default class LoginView extends JetView{
    config(){
       
        var ui={rows:[
            {
                id: "formphr", type: "clean",
                template: 'http->templates/login.html'
            }]
        };
        return ui;
    }
    drawForm(){
         const login_form = {
            view:"form", localId:"login:form",container:"formplacer",
            width:400, borderless:false, margin:10,
            rows:[

                { view:"text", name:"login",placeholder:"User Name", label:"User Name", labelPosition:"top" ,type:"clean"},
                { view:"text", type:"password", name:"pass",placeholder:"Password", label:"Password", labelPosition:"top" },
                { view:"button", value:"Login", click:() => this.do_login(), hotkey:"enter",type:"clean" }
            ],
            rules:{
                login:webix.rules.isNotEmpty,
                pass:webix.rules.isNotEmpty
            }
        };
        webix.ui(login_form);
    }

    init(view){
       // view.$view.querySelector("input").focus();
        this.drawForm();
        document.getElementById("loading_overlay").style="display:none;";
    }

    do_login(){
        const user = this.app.getService("user");
        const form = this.$$("login:form");

        if (form.validate()){
            const data = form.getValues();
            user.login(data.login, data.pass).catch(function(e){
                webix.html.removeCss(form.$view, "invalid_login");
                form.elements.pass.focus();
                webix.delay(function(){
                    webix.html.addCss(form.$view, "invalid_login");
                });
            });
        }
    }
}