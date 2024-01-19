import { LightningElement, api } from 'lwc';

export default class Neighborhood_card_intro extends LightningElement {
  @api image
  @api title
  @api content
  @api intro
}
