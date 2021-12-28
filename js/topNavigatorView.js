import Adapt from 'core/js/adapt';
import { templates } from 'core/js/reactHelpers';
import React from 'react';
import ReactDOM from 'react-dom';

class TopNavigatorView extends Backbone.View {

    className() {
        return 'top-navigator__container';
    }

    initialize() {
        this.listenTo(Adapt, 'remove', this.remove);
        this.listenTo(Adapt, 'pageView:ready', this.onPageViewReady, this);
        window.addEventListener("scroll", this.onScrollMove.bind(this));
    }

    events() {
        return {
            'click .js-top-navigator-arrow-click': 'scrollToPageToTop'
        };
    }

    onPageViewReady() {
        this.render();
    }

    get activeArrow() {
        return 500;
    }

    get scrollAnimation() {
        return {
            duration: 1000,
            easing: 'easeInBack'
        }
    }
    
    get scrollY() {
        return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }

    scrollToPageToTop(event) {
        event?.preventDefault();
        this.$('.top-navigator__arrow').addClass('u-visibility-hidden');
        $('body').velocity('scroll', this.scrollAnimation);
    }

    onScrollMove(event) {
        if (this.scrollY > this.activeArrow) {
            this.$('.top-navigator__arrow').removeClass('u-visibility-hidden');
        }
        if (this.scrollY === 0) {
            this.$('.top-navigator__arrow').addClass('u-visibility-hidden');
        }
    }

    render() {
        const data = this.model.toJSON()._topNavigator;
        const Template = templates[this.constructor.template.replace('.jsx', '')];
        ReactDOM.render(<Template {...data} />, this.el);
        return this;
    }

};

TopNavigatorView.template = 'topNavigator.jsx';

export default TopNavigatorView;
