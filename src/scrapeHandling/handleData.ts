export function getImageURL(element: Element): string | null | undefined {
  const imageContainer = element.querySelector('.s-product-image-container')

  const imageElement = imageContainer?.querySelector('.s-image');

  return imageElement?.getAttribute('src');
}

export function getTitle(element: Element): string | null {
    
  const titleContainer = element.querySelector('[data-cy="title-recipe"]')

  const titleH2 = titleContainer?.getElementsByTagName('h2')[0];

  let title = null;
  if(titleH2?.getElementsByTagName('span')[0]){
    title = titleH2.getElementsByTagName('span')[0].innerHTML;
  }

  return title
}

export function getRating(element: Element): Record<string, any>{

  let rating: Record<string, any> = {
    stars: undefined,
    reviews: undefined
  }

  const titleContainer = element.querySelector('[data-cy="title-recipe"]')

  const titleContainerNextSib = titleContainer?.nextElementSibling;

  if(!titleContainerNextSib?.getAttribute('data-cy')){

      const ratingElement = titleContainerNextSib?.getElementsByTagName('span')[0];

      const stars = ratingElement?.getAttribute('aria-label');

      const ratingNextSibling = ratingElement?.nextElementSibling;

      const reviews = ratingNextSibling?.getAttribute('aria-label');

      rating = {
        stars,
        reviews
      }

  }
  return rating
}