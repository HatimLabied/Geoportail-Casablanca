// "loader" is a Java Scirpt object. Which allows to load CSS and JS libary dynamiclly.
//
// There is no dependence
//
// Methods
// loader.addJs(fileName) Adds a JavaSicript libary
// loader.addCss(fileName) Adds a CSS file link
// loader.addFnc(fnc) adds a function wich is call after all CSS and JS file load.
// loader.init() Load all CSS and JS file into document. It also call functions which are added by loader.addFnc method
// Strongly recomanded loader.init() method shuld be call end of html document.

var loader = {
    
    cssList:new Array(),
    jsList:new Array(),
    jsIterator:0, //private

    
    fncList:new Array(),// private
    addFnc:function(fnc) {
        if ( typeof fnc === "function" ) {
            this.fncList.push(fnc);
        }
    },
    
    findJs:function(file) { //private
        for (var i=0; i<document.getElementsByTagName("script").length; i++) {
            if (document.getElementsByTagName("script")[i].src===file) return i;
        }
        return -1;
    },
    
    findCss:function(file) { //private
        for (var i=0; i<document.getElementsByTagName("link").length; i++) {
            if (document.getElementsByTagName("link")[i].href===file) return i;
        }
        return -1;
    },
    
    addCss:function(file) { //public
        this.cssList.push(file);
    },
    addJs:function (file) { //public
        this.jsList.push(file);
    },
    
    putCss:function(file) { //private
        if (this.findCss(file)>-1) return;
        var link =document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", file);
        document.getElementsByTagName("head")[0].appendChild(link);
    },
    
    putJs:function(file) { //private
        if (this.findJs(file)>-1) return;
        var script=document.createElement('script');
        script.setAttribute("type","text/javascript");
        script.setAttribute("src", file);        
        script.onload = function() {
            if (loader.isComplete() ) {
                loader.doComplete();
            } else {                
                loader.loadNextJs();
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);        
    },
    
    doComplete:function() { //private
        
        for (var i=0; i<loader.fncList.length; i++ ) {
            loader.fncList[i](i);
        }
    },
    
    isComplete:function() { //public
        if (loader.jsIterator < loader.jsList.length ) return false; else return true;
    },
    
    loadNextJs:function() { //protected
        this.jsIterator++;
        this.putJs(this.jsList[this.jsIterator-1]);
    },
    
    init:function() { //public
        for (var i=0; i<this.cssList.length; i++) {
            this.putCss(this.cssList[i]);
        }
        this.loadNextJs();        
    }
};

