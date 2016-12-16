define(function(require) {
    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');
    var TopNavigatorView = require('extensions/adapt-topNavigator/js/topNavigatorView');

    function setupTopNavigatorView(page) {
        page.$el.append(new TopNavigatorView({model: page.model}).$el);
    }

    Adapt.on('pageView:postRender', function(page) {
        if (!Adapt.course.get('_topNavigator') || !Adapt.course.get('_topNavigator')._isEnabled) {
            return;
        }
        setupTopNavigatorView(page);
    });

});