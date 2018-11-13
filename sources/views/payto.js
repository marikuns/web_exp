import { addrbook } from "models/tx"
import { wallet, helper } from "models/api.js"
import { JetView, plugins } from "webix-jet";



export default class ReqView extends JetView {
    config() {
        var ui = {
            rows: [
                { template: "Pay to address:", height: 40, css: "page_title" },
                {
                    view: "form",
                    id: "form_payto",
                    elements: [
                        { view: "text", label: "Address", name: "address", placeholder: "(e.g. XWMyeZEyfKoEBrKCDryFNrF4nNdtuy458j)" },
                        { view: "text", label: "Amount", name: "amount", placeholder: "(e.g. 400.0)" },
                        { view: "text", label: "Comment", name: "comment", placeholder: "enter comment here" },
                        { view: "text", label: "Code", name: "code", placeholder: "..code from GoogleAuth" },
                        {
                            margin: 5, cols: [
                                { view: "button", value: "Send" }
                            ]
                        }
                    ],
                    on: {
                        onSubmit: () => {
                            wallet.post_pay($$('form_payto').getValues()).then(o=>webix.message("XDNA sent!"));
                        }
                    }
                }, {
                    template: "Addresses book", height: 40, css: "page_subtitle"
                },
                {
                    view: "datatable",
                    data: addrbook,
                    scroll: false,
                    columns: [{ id: "addr", header: "Address", fillspace: 1 },
                    { id: "note", header: "Notice", fillspace: 1 }]

                },
                {}
            ]
        };

        return ui;
    }
}