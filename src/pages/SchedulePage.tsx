import React, { useState } from 'react';

import { IonToolbar, IonContent, IonPage, IonButtons, IonTitle,
   IonButton, IonIcon, 
  IonHeader, } from '@ionic/react';
import { notifications } from 'ionicons/icons';

import SessionList from '../components/SessionList';
const SchedulePage: React.FC = () => {
  return (
    <IonPage >
      <IonHeader translucent={true}>
        <IonToolbar>
            <IonTitle style={{fontSize:"23px"}}>Ziply</IonTitle>
 
          <IonButtons slot="end">

              <IonButton >
              <IonIcon slot="icon-only" icon={notifications}></IonIcon>
              </IonButton>
            
           
          </IonButtons>
        </IonToolbar>
     
        
      </IonHeader>
     
      <IonContent fullscreen={true}>
       

     

       
 <SessionList
       
        
       
        /> 
      
      </IonContent>

    

    </IonPage>
  );
};

export default SchedulePage