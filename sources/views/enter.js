import {JetView, plugins} from "webix-jet";
export default class TopView extends JetView{

	config(){

		

		var ui = {
			type:"clean", paddingX:5, css:"app_layout", rows:[
                    { $subview:true } ,
                    {cols:
                    [{template:'<span route="/enter/reg">Register</span>'},
                    {template:'<span route="/enter/login">Login</span>'}],height:25}
				
			]
		};

		return ui;
	}
	init(){
		
	}
}