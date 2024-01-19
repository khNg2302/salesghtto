import { LightningElement, api } from 'lwc';

export default class Hero extends LightningElement {
  @api image;
  @api title;
  @api sub_title;
  @api description
}
