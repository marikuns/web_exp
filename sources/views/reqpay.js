export default {
    type:"space",
    id:"reqcont",
    rows:[        
        {
            responsive:"reqcont",
            cols:[
                {
                    view:"form",
                    minWidth:300,
                    elements:[
                        {view:"text",label:"Label"},
                        {view:"text",label:"Amount"},
                        {
                            margin: 5, cols: [
                                { view: "button", value: "Request" }
                            ]
                        }
                    ]
                },
                {minWidth:300,rows:[
                    {
                        template: "Request history", height: 40, css: "page_subtitle"
                    },{view:"datatable"}
                ]}
            ]

        }
    ]


}