import { LightningElement, api } from 'lwc';

export default class Carousel extends LightningElement {
  @api list
  @api number_displayed
  lastIndex
  displayedButton

  connectedCallback(){
    this.lastIndex = +this.number_displayed
    this.dispatchEvent(this.newEvent('mounted',{detail:this.returnDisplayedData()}))
    this.displayedButton = this.list.length >= this.number_displayed
  }

  newEvent(nameEvent, detail){
    return CustomEvent(nameEvent,detail)
  }

  returnCircleDisplayedData() {
    let indexElement = 0

    return Array.from({length: this.number_displayed}).map((_,index)=>{
      if(this.lastIndex - index < 1){
        indexElement += 1
        return this.list[this.list.length - 1 - (indexElement - 1)]
      }else{
        return this.list[this.lastIndex - 1-index]
      }
    }).reverse()
  }

  returnDisplayedData() {
    if(this.lastIndex < this.number_displayed){
      return this.returnCircleDisplayedData()
    }else{
      return Array.from({length: this.number_displayed}).map((_,index)=>this.list[this.lastIndex-1-index]).reverse()
    }
  }

  next(){
    this.lastIndex = this.lastIndex === this.list.length ? 1 : +this.lastIndex + 1
    this.dispatchEvent(this.newEvent('next',{detail:this.returnDisplayedData()})) 
  }

  prev(){
    this.lastIndex =  this.lastIndex === 1 ? this.list.length : +this.lastIndex - 1
    this.dispatchEvent(this.newEvent('prev',{detail:this.returnDisplayedData()}))
  }
}
