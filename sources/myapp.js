import "./styles/app.css";
import "./styles/xdna.css";
import {login,session,wallet} from "models/api.js"
import {User} from "plugins/user.js"
import {JetApp, EmptyRouter, HashRouter,plugins } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	:true, //!PRODUCTION,
			start 	: "/top/start",
			name :"XDNA WebWallet"
		};
		

		super({ ...defaults, ...config });
		this.acc={
			balance:153.33
		};
		session.setapp(this);
		this.authdata={};
		this.use(User,{model:session,login:"/enter/login",reg:"/enter/reg"});
		this.on('app:user:login',this.afterLogin);
	}
	afterLogin(){
		var balance=wallet.get_balanceAsync(this.authdata.access_token).then(a=>a.json());
		this.acc.balance=balance.data.balance;
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => new MyApp().render() );
}
