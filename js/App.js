class AdharaApp{

    /**
     * @function
     * @instance
     * @return {String} App name
     * */
    get name(){
        return "Adhara App"
    }

    /**
     * @function
     * @instance
     * @return {Object} App name in detail. Like first and last name
     * */
    get detailedName(){
        return {
            first: "Adhara",
            last: "App"
        }
    }

    /**
     * @function
     * @instance
     * @return {String} Tag line
     * */
    get tagLine(){ }

    /**
     * @function
     * @instance
     * @return {AdharaView} Container view class
     * */
    get containerView(){ }

    /**
     * @function
     * @instance
     * @return {Object} Adhara style app config
     * */
    get config(){ return {}; }

    /**
     * @function
     * @instance
     * @return {Object} Adhara style entity config
     * */
    getEntityConfig(context_name){
        let context = this.config[context_name];
        return {
            data_config: {
                url: context.data_config.url,
                allowed_query_types: context.data_config.allowed_query_types?context.data_config.allowed_query_types.slice():[],
                socket_tag: context.data_config.socket_tag,
                reuse: context.data_config.reuse
            },
            blob: context.blob,
            view: context.view,
            processor: context.processor
        }
    }

    /**
     * @function
     * @instance
     * @returns {Array<String>} list of http methods to be allowed by the application.
     * @description This getter can be configured to return allowed methods based on the current network state.
     * Say if offline, it can be configured to just return `["get"]` method which will restrict DataInterface from making
     * other service API calls such as "post", "delete", etc...
     * */
    get allowedHttpMethods() {
        return ['get', 'post', 'put', 'delete'];  // all available API methods
        // offline mode will switch a few of these off (post, put and delete)
    }

    /**
     * @function
     * @instance
     * @return {AdharaRouterConfiguration} Adhara style routing config
     * */
    get routerConfiguration(){
        return {
            routes: [],
            on_route_listeners: {},
            middlewares: []
        }
    }

    /**
     * @function
     * @instance
     * @returns {String} A css selector in which app is to be rendered.
     * */
    get DOMSelector(){
        return "app";   //=> search DOM for `<app></app>`
    }

    /**
     * @function
     * @instance
     * @returns {String} API Server URL. Either the base path or a full url till base path.
     * */
    get apiServerURL(){
        return "/api";
    }

    /**
     * @function
     * @instance
     * @returns {Object} WebSocket config object.
     * sample...
     * {
     *  url: "sub.domain.com:9081"
     * }
     * */
    get webSocketConfig(){ }

    /**
     * @function
     * @instance
     * @param {String} title - toast message title
     * @param {String} content - toast message content
     * @param {String} type - toast message type. can take the values "success"|"error"|"info".
     * */
    toast(title, content, type){
        AdharaDefaultToaster.make(title, content, type);
    }

}
