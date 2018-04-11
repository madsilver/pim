let Utils = {

    defineUrl: function(resource, sort, page, pageSize) {
        if(!localStorage.api) {
            this.persistUrlApi();
        }

        let url = localStorage.api + '/' + resource;
        if(sort || page || pageSize) {
            url = url+`?page=${page}&limit=${pageSize}&sort=${sort.property}&order=${sort.direction}`;
        }
        return url;
    },

    persistUrlApi: function() {
        $.ajax({
            url: '/api/settings',
            async: false,
            complete: function(res){
                localStorage.api = res.responseJSON.urlApi;
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