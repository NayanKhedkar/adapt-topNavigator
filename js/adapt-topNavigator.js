import Adapt from 'core/js/adapt';
import TopNavigatorView from './topNavigatorView';

class TopNavigator extends Backbone.Controller {

    initialize() {
        Adapt.on('pageView:postRender', this.setupTopNavigatorView);
    }
    
    setupTopNavigatorView(page) {
        if (page.model.get('_topNavigator')?._isEnabled) {
            page.$el.append(new TopNavigatorView({ model: page.model }).$el);
        }
    }
}
export default new TopNavigator();
