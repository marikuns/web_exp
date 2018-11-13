import { wallet, helper } from "models/api.js"
import { JetView, plugins } from "webix-jet";



export default class TxView extends JetView {
    config() {
        var ui = {
            type: "space",
            id: "txcont",
            rows: [
                {
                    responsive: "txcont",
                    cols: [

                        {
                            minWidth: 300, rows: [
                                {
                                    template: "Transactions history", height: 40, css: "page_subtitle"
                                },
                                {
                                    view: "datatable",

                                    columns: [
                                        /*{
                                            id: "category", header: "Type", template: (o) => {
                                                return `<div class='category ${o.category}' alt='${o.confirmations} conf.'></div>`;
                                            }, fillspace: 1
                                        },*/
                                        { id: "address", header: "Address", fillspace: 2 },

                                        {
                                            id: "amount", header: "Amount", fillspace: 1,
                                            cssFormat:(o,a)=>{
                                                return "am"+a.category;
                                            },
                                            template: (o) => {
                                                if (o.category == "receive")
                                                    return "+"+o.amount;
                                                else
                                                    return '-' + o.amount;
                                            }
                                        },
                                        {
                                            id: "time", header: "Time", format: helper.timeConverter, fillspace: 1
                                        }
                                    ],
                                    url: () => {
                                        return wallet.get_txs().then((d) => {
                                            return d.json().data.transactions;
                                        })
                                    }
                                }
                            ]
                        }
                    ]

                }
            ]


        }
        return ui;
    }
}