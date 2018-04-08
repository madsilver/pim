let Utils = {

    defineUrl: function(resource, sort, page, pageSize) {
        let url = `http://catalog.local/${resource}`;
        if(sort || page || pageSize) {
            url = url+`?page=${page}&limit=${pageSize}&sort=${sort.property}&order=${sort.direction}`;
        }
        return url;
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