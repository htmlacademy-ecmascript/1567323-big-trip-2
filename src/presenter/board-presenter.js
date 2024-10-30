import EventListView from '../view/event-list-view';
import EventTripView from '../view/event-trip-view';
import SortView from '../view/list-sort-view';
import PointView from '../view/add-new-point-view';
import { render } from '../render';


export default class BoardPresenter {
  boardComponent = new EventListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new SortView, this.boardComponent.getElement());
    render(new PointView, this.boardComponent.getElement());
    render(new EventListView, this.boardComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventTripView(), this.boardComponent.getElement());
    }
  }
}
