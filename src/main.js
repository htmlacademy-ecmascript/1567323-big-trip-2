import { render, RenderPosition } from './render';
import FilterView from './view/list-filter-view';
import BoardPresenter from './presenter/board-presenter';
import RouteInfoView from './view/route-info-view';

const siteMainElement = document.querySelector('.trip-main');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const tripContainer = document.querySelector('.trip-events');


render(new FilterView(), siteFilterElement);
render(new RouteInfoView(), siteMainElement, RenderPosition.AFTERBEGIN);

const boardPresenter = new BoardPresenter({boardContainer: tripContainer});
boardPresenter.init();
