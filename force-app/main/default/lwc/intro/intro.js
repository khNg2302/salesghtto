import { LightningElement, api } from 'lwc';

export default class Intro extends LightningElement {
  @api title
  @api sub_title
  @api description
}
