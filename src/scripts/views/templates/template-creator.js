import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<h2 class="resto__title">${resto.name}</h2>
<picture>
<source type="image/webp" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}">
<source type="image/jpeg" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}">
	<source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}">
  <img class="resto__poster" class="lazyload" src="${CONFIG.BASE_IMAGE_URL_LARGE + resto.pictureId}"
		alt="${resto.name}"/>
</picture>
  <div class="resto__info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${resto.address} ${resto.city}</p>
    <h4>Makanan</h4>
    ${resto.menus.foods
    .map(
      ({ name }) => `
						<p>&#9098; ${name}</p>
						<br />
				`,
    )
    .join('')}
    <h4>Minuman</h4>
		${resto.menus.drinks
    .map(
      ({ name }) => `
						<p>&#9098; ${name}</p>
						<br />
				`,
    )
    .join('')}
  </div>              
  <div class="resto__overview">
    <h4>Deskripsi</h4>
    <p style='text-align: justify'>${resto.description}</p>
    <h4>Review</h4>
    ${resto.customerReviews
    .map(
      ({ name, date, review }) => `
					<p>Nama: ${name}</p>
					<p>Tanggal: ${date}</p>
					<p>Review: ${review}</p>
					<br />
			`,
    )
    .join('')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
			<picture>
				<source type="image/webp" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}">
				<source type="image/jpeg" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}">
				<source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}">
				<img class="resto-item__header__poster" class="lazyload" src="${CONFIG.BASE_IMAGE_URL_LARGE + resto.pictureId}"
					alt="${resto.name}"/>
			</picture>
      <div class="resto-item__header__rating">
        <p>✯ <span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name || '-'}</a></h3>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
