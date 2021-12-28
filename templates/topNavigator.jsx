import Adapt from 'core/js/adapt';
import React from 'react';

export default function TopNavigator(props) {
    return (
        <div class="top-navigator__inner">
            <div class="top-navigator__item">
                <button class=" top-navigator__arrow js-top-navigator-arrow-click u-visibility-hidden">
                    <img src={props._graphic.src} alt={props._graphic.alt} />
                </button>
            </div>
        </div>
    );
}