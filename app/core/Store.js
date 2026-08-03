class Store {

    static data = {

        user: null,

        currentPage: "dashboard",

        sidebarCollapsed: false,

        theme: "light"

    };

    static get(key){

        return this.data[key];

    }

    static set(key,value){

        this.data[key]=value;

    }

}