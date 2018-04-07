let Utils = {

    defineUrl: function(resource, sort, page, pageSize) {
        let url = `http://catalog.local/${resource}`;
        let _url = url+`?page=${page}&limit=${pageSize}&sort=${sort.property}&order=${sort.direction}`;
        return _url;
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
    }



};