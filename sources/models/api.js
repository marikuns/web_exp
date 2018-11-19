var api_addr = "http://api-wallet.xdna.io/"
var app = {}
export const login = {
    keyweb: "R8W6FCIv12j8IHdHovMa4o2DA3K40k9p9TM9wl6J",
    get_code: (cb) => {
        webix.ajax().get(api_addr + "register/get-code", (t) => {
            if (cb)
                cb(JSON.parse(t));
        })
    },
    check_code: (code, secret) => {
        var resp = webix.ajax().sync().post(api_addr + "register/check-code", { secret: secret, code: code })
        return JSON.parse(resp.responseText);
    },
    register: (data) => {
        data.client_secret = login.keyweb;
        var resp = webix.ajax().sync().post(api_addr + "/register", data);
        return JSON.parse(resp.responseText);
    },
    loginAsync: (u, p) => {
        var data = {
            grant_type: "password",
            client_id: 1,
            client_secret: login.keyweb,
            username: u,
            password: p
        }
        var resp = webix.ajax().post(api_addr + "oauth/token", data);
        return resp;
    },
    login: (u, p) => {
        var data = {
            grant_type: "password",
            client_id: 1,
            client_secret: login.keyweb,
            username: u,
            password: p
        }
        var resp = webix.ajax().sync().post(api_addr + "oauth/token", data);

        return JSON.parse(resp.responseText);
    },
    token: ""



}
export const wallet = {
    get_balanceAsync: (token) => {
        return webix.ajax().headers({ Authorization: "Bearer " + app.authdata.access_token }).get(api_addr + "api/v1/wallet/get-balance")
    },
    get_balanceSync: (token) => {
        return webix.ajax().headers({ Authorization: "Bearer " + app.authdata.access_token }).sync().get(api_addr + "api/v1/wallet/get-balance")
    },
    get_txs: (token) => {
        return webix.ajax().headers({ Authorization: "Bearer " + app.authdata.access_token }).get(api_addr + "api/v1/wallet/get-transactions")
    },
    get_req: (token) => {
        return webix.ajax().headers({ Authorization: "Bearer " + app.authdata.access_token }).get(api_addr + "api/v1/wallet/payment-requests")
    },
    post_makereq: (label, token) => {
        return webix.ajax().headers({ Authorization: "Bearer " + app.authdata.access_token }).post(api_addr + "api/v1/wallet/new-payment-request", { label: label });

    },
    post_pay: (data) => {
        return webix.ajax().headers({ Authorization: "Bearer " + app.authdata.access_token }).post(api_addr + "api/v1/wallet/transfer-to-address", data);
    }

}
export const session = {
    status: (b) => {
        if (b)
            return wallet.get_balanceSync(app.authdata.access_token);
        return wallet.get_balanceAsync(app.authdata.access_token);
    },

    login: (user, pass) => {
        return login.loginAsync(user, pass).then(a => a.json());
    },
    logout: () => {
        return webix.ajax().post("server/login.php?logout")
            .then(a => a.json());
    },
    setapp: (t) => { app = t; }

}
export const helper = {
    timeConverter: (UNIX_timestamp) => {
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
    },

}