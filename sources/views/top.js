import { JetView, plugins } from "webix-jet";



export default class TopView extends JetView {

	config() {
		var acc = this.app.acc;

	/*	var infoblock = {
			paddingX: 5,
			paddingY: 5,
			id:"balance_label",
			data:acc,
			template: (o, d) => {
				return `<div class='infoblock'><span>Your Balance</span><span>${acc.balance} XDNA</span><div>`
			}
		}
		var logo = { template: "<div class='xdna_logo'></div>" }
		var header = {
			type: "clean", cols: [infoblock, logo], css: "webix_header app_header"
		};
*/
		


		var ui ={container:"mainpanel",cols:[ {$subview: true} ]};

		return ui;
	}
	init() {
	
		this.app.loadData();

			document.getElementById("loading_overlay").style="display:none;";
		
	}
}