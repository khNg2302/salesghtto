import { LightningElement, api } from 'lwc';

export default class Tab extends LightningElement {
    @api tabs
    @api changeTabFunc

    newEvent(nameEvent, detail){
        return CustomEvent(nameEvent,detail)
      }

    changeTab(event){
        this.dispatchEvent(newEvent('changeTab',{detail:{
            content: this.onChangeTab(event.target.dataset.slug),
            tabTitle: event.target.dataset.tab_title
        }}))
    }


}