import "./styles/app.css";
import "./styles/xdna.css";
import { login, session, wallet } from "models/api.js"
import { User } from "plugins/user.js"
import { JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";

export default class MyApp extends JetApp {
	constructor(config) {
		const defaults = {
			id: APPNAME,
			version: VERSION,
			router: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug: true, //!PRODUCTION,
			start: "/top/start",
			name: "XDNA WebWallet"
		};


		super({ ...defaults, ...config });
		this.acc = {
			balance: 153.33
		};
		session.setapp(this);
		this.authdata = {};
		this.use(User, { model: session, login: "/enter/login", reg: "/enter/reg" });
		this.on('app:user:login', this.afterLogin);
	}
	afterLogin() {
		this.authdata = this.getService("user").getUser();
		login.token=this.authdata.access_token;
		var balance = wallet.get_balanceAsync()
			.then((a) => {
				console.log(a);
				this.acc.balance = a.json().data.balance;
				this.refreshUI(['balance_label'])
				this.testAPI();
				return a;
			});

	}
	refreshUI(params) {
		for (var a in params) {
			var name = params[a];
			var el = $$(name)
			if (el)
				el.refresh();
		}
	}
	testAPI() {
		var token = this.authdata.access_token;
		wallet.get_balanceAsync().then(a => console.log(a.json()));
		wallet.get_txs().then(a => console.log(a.json()));
		wallet.get_req().then(a => console.log(a.json()));

	}
}

if (!BUILD_AS_MODULE) {
	webix.ready(() => new MyApp().render());
}
