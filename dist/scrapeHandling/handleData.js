"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRating = exports.getTitle = exports.getImageURL = void 0;
function getImageURL(element) {
    const imageContainer = element.querySelector('.s-product-image-container');
    const imageElement = imageContainer?.querySelector('.s-image');
    return imageElement?.getAttribute('src');
}
exports.getImageURL = getImageURL;
function getTitle(element) {
    const titleContainer = element.querySelector('[data-cy="title-recipe"]');
    const titleH2 = titleContainer?.getElementsByTagName('h2')[0];
    let title = null;
    if (titleH2?.getElementsByTagName('span')[0]) {
        title = titleH2.getElementsByTagName('span')[0].innerHTML;
    }
    return title;
}
exports.getTitle = getTitle;
function getRating(element) {
    let rating = {
        stars: undefined,
        reviews: undefined
    };
    const titleContainer = element.querySelector('[data-cy="title-recipe"]');
    const titleContainerNextSib = titleContainer?.nextElementSibling;
    if (!titleContainerNextSib?.getAttribute('data-cy')) {
        const ratingElement = titleContainerNextSib?.getElementsByTagName('span')[0];
        const stars = ratingElement?.getAttribute('aria-label');
        const ratingNextSibling = ratingElement?.nextElementSibling;
        const reviews = ratingNextSibling?.getAttribute('aria-label');
        rating = {
            stars,
            reviews
        };
    }
    return rating;
}
exports.getRating = getRating;
