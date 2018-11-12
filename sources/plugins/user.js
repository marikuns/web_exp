export function User(app, _view, config) {
    config = config || {};
    var login = config.login || "/login";
    var reg=config.reg||"/reg";
    var logout = config.logout || "/logout";
    var afterLogin = config.afterLogin || app.config.start;
    var afterLogout = config.afterLogout || "/login";
    var ping = config.ping || 5 * 60 * 1000;
    var model = config.model;
    var user = config.user;
    var service = {
        getUser: function () {
            return user;
        },
        getStatus: function (server) {
            if (!server) {
                return user !== null;
            }
            return model.status().catch(function () { return null; }).then(function (data) {
                user = data;
            });
        },
        login: function (name, pass) {
            return model.login(name, pass).then(function (data) {
                user = data;
                if (!data) {
                    throw new Error("Access denied");
                }
                app.callEvent("app:user:login", [user]);
                app.show(afterLogin);
            });
        },
        logout: function () {
            user = null;
            return model.logout().then(function (res) {
                app.callEvent("app:user:logout", []);
                return res;
            });
        }
    };
    function canNavigate(url, obj) {
        if (url === logout) {
            service.logout();
            obj.redirect = afterLogout;
        }
        else if (url !== login && url !== reg && !service.getStatus()) {
            obj.redirect = login;
        }
    }
    app.setService("user", service);
    app.attachEvent("app:guard", function (url, _$root, obj) {
        if (typeof user === "undefined") {
            obj.confirm = service.getStatus(true).then(function () { return canNavigate(url, obj); });
        }
        return canNavigate(url, obj);
    });
    if (ping) {
        setInterval(function () { return service.getStatus(true); }, ping);
    }
}
