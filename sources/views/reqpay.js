import { wallet } from "models/api.js"
import { JetView, plugins } from "webix-jet";



export default class ReqView extends JetView {
    config() {
        var ui = {
            type: "space",
            id: "reqcont",

            rows: [
                {
                    responsive: "reqcont",
                    cols: [
                        {
                            view: "form",
                            id: "reqform",
                            minWidth: 600,
                            elements: [
                                { view: "text", label: "Label", name: "label" },

                                {
                                    margin: 5, cols: [
                                        { view: "button", value: "Request" }
                                    ]
                                }
                            ],
                            on: {
                                onSubmit: () => {
                                    wallet.post_makereq($$('reqform').getValues().label).then(this.app.refreshUI(["reqtable"]));
                                }
                            }
                        },
                        {
                            minWidth: 300,minHeight:400, gravity:1,
                            rows: [
                                {
                                    template: "Request history", height: 40, css: "page_subtitle"
                                },
                                
                                {
                                    view: "datatable",height:0,
                                    on:{
                                        onBeforeLoad:function(){
                                            this.showOverlay("Loading...");
                                        },
                                        onAfterLoad:function(){
                                            this.hideOverlay();

                                        }
                                    },
                                    columns:[
                                        {id:"label",header:"Label",fillspace:1},
                                        {id:"address",header:"Address",fillspace:2}
                                    ],
                                    url:()=>{
                                        return wallet.get_req().then((d)=>{
                                            return d.json().data.payment_requests;
                                        })
                                    }
                                },{height:1}
                            ]
                        }
                    ]

                }
            ]


        }
        return ui;
    }
}