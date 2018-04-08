let Utils = {

    url: 'http://localhost:3001',

    defineUrl: function(resource, sort, page, pageSize) {
        if(!localStorage.api) {
            this.persistApiUrl();
        }

        let url = localStorage.api + '/' + resource;
        if(sort || page || pageSize) {
            url = url+`?page=${page}&limit=${pageSize}&sort=${sort.property}&order=${sort.direction}`;
        }
        return url;
    },

    persistApiUrl: function() {
        let url = this.url + '/api/settings';

        $.ajax({
            url: url,
            async: false,
            complete: function(res){
                localStorage.api = res.responseJSON.apiUrl;
            }
        });
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

    toast: function(msg, success) {
        let toast = Polymer.toastElement;
        if(toast == null) {
            alert(msg);
            return;
        }
        toast.text = msg;

        if(!success && success != undefined) {
            toast.style.background = "#e91e63";
        }
        else {
            toast.style.background = "#323232";
        }

        toast.open();
    }



};