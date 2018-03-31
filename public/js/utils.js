var Utils = {

    locale: function() {
        /* Translation */
        if(!localStorage.hasOwnProperty("appLang") || localStorage.appLang == "undefined"){
            localStorage.setItem("appLang", "en");
        }

        I18nMsg.lang = localStorage.appLang;
        Platform.performMicrotaskCheckpoint();
    },

    loading: function(action) {
        if(action) {
            $("#drawer").addClass("blur");
            $("#loader").fadeIn();
        }
        else {
            $("#drawer").removeClass("blur");
            $("#loader").fadeOut();
        }
    },

    strToDate: function(dt) {
        if(dt == "" || dt == undefined)
            return dt;

        if(isNaN(Date.parse(dt))) {
            while(dt.length < 14) {
                dt += "0";
            }
            dt = Number(dt.toString().replace(".",""));
        }

        var date = new Date(dt);

        if(isNaN(date.getTime()))
            return null;
        var
            y = date.getFullYear(),
            m = f(date.getMonth()+1),
            d = f(date.getDate()),
            h = f(date.getHours()),
            n = f(date.getMinutes()),
            s = f(date.getSeconds());
        return this.formatString("{0}/{1}/{2} {3}:{4}:{5}", d, m, y, h, n, s);

        function f(n) {
            return n = n <= 9 ? "0" + n : n;
        }
    },

    formatString: function(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != "undefined"
                ? args[number] 
                : match
            ;
        });
    },

    toHexString: function(byteArray) {
        // return Array.prototype.map.call(new Uint8Array(byteArray), x => ("00" + x.toString(16)).slice(-2)).join("");
        var a =  Array.prototype.map.call(new Uint8Array(byteArray), function(x) {
            return (("00" + x.toString(16)).slice(-2));
        });
        return a.join("");
    },

    toArray: function(obj) {
        if (!obj) return;
        var arr = Object.keys(obj).map(function (key) {
            return {
                name: key,
                value: obj[key]
            };
        });
        return arr;
    }


};