import { LightningElement, api } from 'lwc';

export default class Neighborhood_carousel extends LightningElement {
  @api list
  @api displayedNumber
  changePositionCount = 0

  newEvent(nameEvent, detail){
    return CustomEvent(nameEvent,detail)
  }

  

  changePosition(currentPosition) {
      const startIndex = this.changePositionCount % currentPosition.length
      const positionDisplayed = Array.from({length:currentPosition.length}).map(()=>undefined)
      let indexElement = 0

      for(let i = startIndex; i < startIndex + currentPosition.length; i++) {
        positionDisplayed[i % currentPosition.length] = currentPosition[indexElement]
        indexElement++
      }
      return positionDisplayed
  }

  mounted(event){
    this.dispatchEvent(this.newEvent('mounted',{detail: event.detail}))
  }

  nextChangePositionCount(){
    this.changePositionCount += 1
  }

  prevChangePositionCount(){
    if(this.changePositionCount === 0) this.changePositionCount = this.displayedNumber - 1
    else this.changePositionCount -= 1
  }

  next(event){
    this.nextChangePositionCount()
    this.dispatchEvent(this.newEvent('next',{detail: this.changePosition(event.detail)}))
  }

  prev(event){
    this.prevChangePositionCount()
    this.dispatchEvent(this.newEvent('prev',{detail: this.changePosition(event.detail)}))
  }
}
