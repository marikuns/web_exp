import {txs} from "models/tx"
export default {
	cols: [
		{
			header: "Blockchain info",
			body: {
				view: "property"
			},
		},
		{
			header: "Last transactions",
			body: {
				view: "dataview", width:300,
				data:txs,
				xCount:1,
				template:(o)=>{return `<div class='txlast d${o.dir}'><span class='ammount'>${o.ammount}</span><span class='dt'>${timeConverter(o.dt)}</span><div>`},
				type:{
					width: 300,
					height: 50,
					
				} 
			}
		}
	]
};

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();

  var time = date + ' ' + month + ' ' + year + ' ' + (hour<10?'0'+hour:hour)  + ':' +  (min<10?'0'+min:min) + ':' + (sec<10?'0'+sec:sec);
  return time;
}