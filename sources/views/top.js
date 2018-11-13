import {JetView, plugins} from "webix-jet";



export default class TopView extends JetView{

	config(){
		var acc=this.app.acc;
		var infoblock={paddingX:5,paddingY:5,template:(o,d)=>{return `<div class='infoblock'><span>Your Balance</span><span>${acc.balance} XDNA</span><div>`}}
		var logo={template:"<div class='xdna_logo'></div>"}
		var header = {
			type:"clean", cols:[infoblock,logo], css:"webix_header app_header"
		};

		var menu = {
			align:"center",
			view:"menu", id:"top:menu", 
			css:"app_menu",
			layout:"x", select:true,
			
			template:"<span class='webix_icon #icon#'></span> #value# ",
			data:[
				{ value:"Home", id:"start", icon:"wxi-dots" },
				{ value:"Pay to",		 id:"payto",  icon:"wxi-angle-double-up" },
				{ value:"Request pay",		 id:"reqpay",  icon:"wxi-angle-double-down" },
				{ value:"Transactions",		 id:"trans",  icon:"wxi-drag" },
				{ value:"Account",		 id:"acc",  icon:"wxi-alert" }
			]
		};
		

		var ui = {
			type:"clean", paddingX:5, css:"app_layout", rows:[
				{  paddingX:5, paddingY:10, rows: [ {css:"webix_shadow_medium", rows:[{view:"toolbar",cols:[menu]},header]} ],height:150},
				{ type:"wide", paddingY:10, paddingX:5, rows:[
					{ $subview:true } 
				]}
			]
		};

		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
		
	}
}