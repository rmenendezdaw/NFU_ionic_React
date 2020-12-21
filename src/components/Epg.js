import React from 'react';
import data from '../data/epg.json';
import {
  IonSlides,
  IonSlide,
  IonLabel,  
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonRow,  
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
import './Epg.css';

export default class Epg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: Object.values(data.events),
            name: data.name,
            title: data.title,
        }
        this.doClick = this.doClick.bind(this);
    }
    doClick(start,end){
        alert("Start:"+start+" End:"+(start+end));    
      }
      convertDate(utc){
        let date=new Date(0);
        date.setUTCSeconds(utc);                          
        return date.toLocaleString();  
      }
render(){
    console.log("RENDER")
    const slideOpts = {
        slidesPerView: 5,
        grabCursor: true,    
  
        virtual: true, 
      };   
    return (
        <IonRow class="test">
          <IonLabel className="my-label">{this.state.title}</IonLabel> 
          <IonSlides className="my-slide" options={slideOpts}>
            {this.state.events.map((data,i) => (
            <IonSlide key={i} 
                onClick={ 
                    () => this.doClick(data.spa.start,data.spa.duration) 
                }>
                <IonCard key={'card_'+i}>
                    <IonCardHeader>
                        <IonCardSubtitle>{this.convertDate(data.spa.start)}</IonCardSubtitle>
                        <IonCardTitle>{data.spa.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {data.spa.ext && data.spa.ext.text}
                    </IonCardContent>
                </IonCard>
            </IonSlide>
            ))}
            </IonSlides>
        </IonRow>
       
      );
    }
}