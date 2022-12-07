import RestoSource from '../../data/restaurant-db-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
			<div class="hero">
				<div class="hero__inner">
					<h1 class="hero__title">CARILAH RESTAURANT FAVORITMU DISINI!</h1>
				</div>
			</div>
			<div class="content">
        <h2 class="content__heading">Daftar Restaurant</h2>
        <div id="restos" class="restos"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await RestoSource.allData();
    const restosContainer = document.querySelector('#restos');
    restaurant.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
