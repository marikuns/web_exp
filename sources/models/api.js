var api_addr="http://api-wallet.xdna.io/"

export const login={
    keyweb:"R8W6FCIv12j8IHdHovMa4o2DA3K40k9p9TM9wl6J",
    get_code:(cb)=>{
        webix.ajax().get(api_addr+"register/get-code",(t)=>{
            if(cb)
                cb(JSON.parse(t));
        })
    },
    check_code:(code,secret)=>{
      var resp=webix.ajax().sync().post(api_addr+"register/check-code",{secret:secret,code:code})
      return JSON.parse(resp.responseText);
    },
    register:(data)=>{
        data.client_secret=login.keyweb;
        var resp=webix.ajax().sync().post(api_addr+"/register",data);
        return JSON.parse(resp.responseText);
    },
    loginAsync:(u,p)=>{
        var data={
            grant_type:"password",
            client_id:1,
            client_secret:login.keyweb,
            username:u,
            password:p
        }
        var resp=webix.ajax().post(api_addr+"oauth/token",data);
        return resp;
    },
    login:(u,p)=>{
        var data={
            grant_type:"password",
            client_id:1,
            client_secret:login.keyweb,
            username:u,
            password:p
        }
        var resp=webix.ajax().sync().post(api_addr+"oauth/token",data);
        return JSON.parse(resp.responseText);
    }



}
export const wallet={
    get_balanceAsync:(token)=>{
       return webix.ajax().headers({Authorization:token}).get(api_addr+"api/v1/wallet/get-balance")        
    }
}
export const session={
    status:()=>{
        return wallet.get_balanceAsync(session.app.authdata.access_token)
            .then(a => a.json());
    },
    
    login:(user, pass)=>{
        return login.loginAsync(user,pass).then(a => a.json());
    },    
    logout:()=>{
        return webix.ajax().post("server/login.php?logout")
            .then(a => a.json());
    },
    app:{}
    
}