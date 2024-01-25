import { LightningElement, api } from 'lwc';

export default class Carousel extends LightningElement {
  @api list
  @api number_displayed
  @api per_change_number
  lastIndex
  centerIndex

  fillList(){
    if(this.list.length < this.number_displayed){
      const initialList = [...this.list]
      for(let i = 1; i < +this.number_displayed / this.list.length; i++){
        this.list = [...this.list,...initialList]
      }
    }
  }
  connectedCallback(){
    this.fillList()
    this.lastIndex = +this.number_displayed
    this.per_change_number = +this.per_change_number
    this.calcCenterIndexes()
    this.dispatchEvent(this.newEvent('mounted',{detail:this.returnDisplayedData()}))
  }

  newEvent(nameEvent, detail){
    return CustomEvent(nameEvent,detail)
  }


  calcCenterIndexes(){
    const center = this.number_displayed / 2
    if(center === Math.round(center)) this.centerIndex = [center, center + 1]
    else this.centerIndex = [Math.round(center)]
  }


  specifyElement(index, element){
    if(this.centerIndex.includes(index+1)){
      return {...element, isCenter: true}
    }

    return element
  }

  returnCircleDisplayedData() {
    let indexElement = 0

    return Array.from({length: this.number_displayed}).map((_,index)=>{
      if(this.lastIndex - index < 1){
        indexElement += 1
        return this.specifyElement(index, this.list[this.list.length - 1 - (indexElement - 1)])
      }else{
        return this.specifyElement(index,this.list[this.lastIndex - 1-index])
      }
    }).reverse()
  }

  returnDisplayedData() {
    if(this.lastIndex < this.number_displayed){
      return this.returnCircleDisplayedData()
    }else{

      return Array.from({length: this.number_displayed}).map((_,index)=> this.specifyElement(index,this.list[this.lastIndex-1-index])).reverse()
    }
  }

  next(){
    this.lastIndex = this.lastIndex === this.list.length ? this.per_change_number : +this.lastIndex + this.per_change_number
    this.dispatchEvent(this.newEvent('next',{detail:this.returnDisplayedData()})) 
  }

  prev(){
    this.lastIndex =  this.lastIndex === this.per_change_number ? this.list.length : +this.lastIndex - this.per_change_number
    this.dispatchEvent(this.newEvent('prev',{detail:this.returnDisplayedData()}))
  }
}
