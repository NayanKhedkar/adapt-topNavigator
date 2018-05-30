define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var TopNavigatorView = Backbone.View.extend({

        className: 'top-navigator-container ',

        initialize: function() {
            this.listenTo(Adapt, 'remove', this.remove);
            this.listenTo(Adapt, 'pageView:ready', this.onPageViewReady, this);
            window.addEventListener("scroll", _.bind(this.onScrollMove,this));
        },
        events: {
            'click .top-navigator-arrow': 'scrollToPageToTop'
        },
        onPageViewReady: function(){
                this.render();
        },
        scrollToPageToTop: function(event) {
            if(event && event.preventDefault) event.preventDefault();
            $('body').velocity('scroll',{duration:1000,easing:'easeInBack'});
            // Adapt.scrollTo(0);
        },
        onScrollMove:function(event){
            var scrollY = this.getScrollY();
            if(scrollY>100){
            this.$('.top-navigator-arrow').removeClass('visibility-hidden');
            }
            if(scrollY===0){
             this.$('.top-navigator-arrow').addClass('visibility-hidden');
            }
        },
        getScrollY:function(){
           return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        },
        render: function() {
              var data = this.model.toJSON();
              var template = Handlebars.templates["topNavigator"];
              var isTopNavigator=this.model.get('_topNavigator');
                if (isTopNavigator && isTopNavigator._isEnabled){
                       this.$el.html(template(data));
                    }
                return this;
            }
    });

    return TopNavigatorView;

});
