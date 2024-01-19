import { LightningElement, api } from 'lwc';

export default class Neighborhood_carousel extends LightningElement {
  @api list
  displayed = []

  getCarouselContent () {
    return this.refs.carousel
  }

  setDisplayed (event) {
    const displayed = event.detail
    displayed[1]={
      ...displayed[1],
      intro:true
    }
    this.displayed = displayed
  }

  next(event){
    const carousel = this.getCarouselContent()
    carousel.append(carousel.children[0])
    this.setDisplayed(event)
  }
}
