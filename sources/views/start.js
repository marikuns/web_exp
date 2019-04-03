import { JetView, plugins } from "webix-jet";
import { wallet, helper } from "models/api.js"
import { txs } from "models/tx"
export default class MainView extends JetView {
	config() {
		var acc = this.app.acc;
		console.log(acc)
		var ui = {
			padding: 5,
			rows: [
				{
					minWidth: 400, view: "flexlayout",
					cols: [
						{
							id: "mn_bage", css: { "background": "none !important" }, type: "clean", data: this.app.acc, minWidth: 400, maxHeight: 150,
							template: 'http->templates/start.mn.html'
						}, {
							id: "balance_bage", css: { "background": "none !important" }, data: this.app.acc, type: "clean", minWidth: 400,
							maxHeight: 150,
							template: 'http->templates/start.bl.html'
						}, {
							id: "bchain_bage", css: { "background": "none !important" }, type: "clean", data: this.app.acc, minWidth: 400, maxHeight: 150,
							template: 'http->templates/start.bch.html'
						},
						{
							css: { background: "#fff", width: "100%" }, minWidth: 500, type: "clean", rows: [
								{ type: "clean", template: '<h4 class="card-title">Recent transactions</h4>', css: { padding: 25 }, autoheight: true },
								{
									id: "start:txs",
									view: "datatable",
									scroll: false,

									borderless: true,
									css: "xdnatable",
									data: this.app.acc.txs,
									columns: [
										{ id: "time", fillspace: 2, css: { "font-weight": "bold" }, format: helper.timeConverter,header:"Time" },
										{ id: "amount", fillspace: 1,header:"Amount" },
										{ id: "txid", fillspace: 3 ,header:"TXid"}, 
										{ id: "address", fillspace: 2 ,header:"Address"},
										 { id: "confirmations", fillspace: 1 ,header:"Confirmations"}
									]
								}

							]
						}
					]

				}]
		};
		return ui
	}
	init(){
		document.getElementById("loading_overlay").style="display:none;";
	}
}

function timeConverter(UNIX_timestamp) {
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();

	var time = date + ' ' + month + ' ' + year + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
	return time;
}