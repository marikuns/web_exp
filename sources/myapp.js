import "./styles/app.css";
import "./styles/xdna.css";
import {JetApp, EmptyRouter, HashRouter } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	:true, //!PRODUCTION,
			start 	: "/top/start"
		};
		

		super({ ...defaults, ...config });
		this.acc={
			balance:153.33
		};
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => new MyApp().render() );
}