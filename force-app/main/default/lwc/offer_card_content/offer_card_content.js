import { LightningElement, api } from 'lwc';

export default class Offer_card_content extends LightningElement {
    @api image
    @api title
    @api description
    @api link_detail
}