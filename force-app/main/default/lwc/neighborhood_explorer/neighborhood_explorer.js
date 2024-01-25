import { LightningElement } from 'lwc';
import NeighborhoodImages from "@salesforce/resourceUrl/NeighborhoodImages"

export default class Neighborhood_explorer extends LightningElement {
  description=[
    {
      id:1,
      image:NeighborhoodImages+'/hiroshi.jpg',
      title:'HIROSHI SENJU MUSEUM KARUIZAWA',
      content:'A unique museum combining art and architecture. The museum is home to one of the world’s most celebrated artists, Hiroshi Senju, who is based in Tokyo, Kyoto, and New York. The museum has a great collection of Hiroshi Senju’s work, thanks to Ryue Nishizawa and the artist himself. Photo: Taichi Ano © Senju Hiroshi Karuizawa Museum of Art.'
    },
    {
      id:2,
      image:NeighborhoodImages+'/wakita.jpg',
      title:'WAKITA MUSEUM OF ART',
      content:'Wakita Art Museum, located in a quiet corner of Karuizawa, exhibits the entire works of Kazu Wakita, a famous Japanese Western style artist. One thousand oil paintings, drawings, and other pieces by the celebrated painter are in the collection of the museum. Photo courtesy of Wakita Art Museum'
    },
    {
      id:3,
      image:NeighborhoodImages+'/muro.jpg',
      title:'MURO SAISEI KINENKAN MUSEUM',
      content:'A memorial hall built on the site of the birthplace of Saisei Muro, one of the three great writers of Kanazawa. It is a place where you can meet Mr. Muro’s way of life and the charm of his literary world. Photo courtesy of Murou Saisei Memorial Hall'
    }
  ]
}
