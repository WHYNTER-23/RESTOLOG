import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoSearchView from './liked-restos/favorite-resto-search-view';
import FavoriteRestoSearchPresenter from './liked-restos/favorite-resto-search-presenter';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter'

const view = new FavoriteRestoSearchView();

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <div id="restos" class="restos">

        </div>
      </div>
    `;
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
  	new FavoriteRestoSearchPresenter({ view, favoriteRestos: FavoriteRestoIdb });
  },
};

export default Like;
