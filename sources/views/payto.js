import {addrbook} from "models/tx"
export default {
    rows: [
        { template: "Pay to address:", height: 40, css: "page_title" },
        {
            view: "form",
            id: "form_payto",
            elements: [
                { view: "text", label: "Address", name: "addr", placeholder: "(e.g. XWMyeZEyfKoEBrKCDryFNrF4nNdtuy458j)" },
                { view: "text", label: "Amount", name: "amnt", placeholder: "(e.g. 400.0)" },
                {
                    margin: 5, cols: [
                        { view: "button", value: "Send" }
                    ]
                }
            ]
        }, {
            template: "Addresses book", height: 40, css: "page_subtitle"
        },
        {
            view: "datatable",
            data:addrbook,
            scroll:false,
            columns: [{ id: "addr", header: "Address", fillspace: 1 },
            { id: "note", header: "Notice", fillspace: 1 }]

        },
        {}
    ]
};
