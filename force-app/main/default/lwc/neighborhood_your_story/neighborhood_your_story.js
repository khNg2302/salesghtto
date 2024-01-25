import { LightningElement } from 'lwc';
import NeighborhoodImages from "@salesforce/resourceUrl/NeighborhoodImages"

export default class Neighborhood_your_story extends LightningElement {
  description= [
    {
      id:1,
      image:NeighborhoodImages +'/karuizawa_terry.jpg',
      title:'TERRY MCKENNA',
      content: '~ Fascinated by the traditional art of Japan ~ Terry McKenna is an Australian woodblock printmaker living in Karuizawa. As a traditional Japanese woodblock print enthusiast, he trained in Kyoto and is devoted to sharing his skills with others in Japan and around the world.'
    },
    {
      id:2,
      image:NeighborhoodImages + "/karuizawa.jpg",
      title:'KARUIZAWA GLASS STUDIO',
      content: '~ The magic of glass blowing ~ In the Minami Karuizawa area, a five-minute drive from Hotel Indigo Karuizawa, is the Karuizawa Glass Studio of artist Kenji Ito. Here you can enjoy incredible views of Mount Asama. Various hands-on classes are available for everyone from elementary school students to adults, and you can create your own original glass goods. The works of Kenji Ito and other young glass artists are also on display and for sale, so you are sure to find the perfect souvenir.'
    },
    {
      id:3,
      image:NeighborhoodImages + "/bicycle_rental.jpeg",
      title:'BICYCLE RENTAL',
      content: '~Strolling in the Hotel’s Neighborhood~ We have begun offering bicycle rentals so that visitors can enjoy sightseeing in the lush, nature-rich Karuizawa area. We have prepared six bicycles by Louis Garneau, a Canadian company whose brand philosophy is “artistic bicycles for people who color the city.”'
    }
  ]
}
