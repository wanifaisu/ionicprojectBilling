import { IonItemDivider, AlertButton, IonTitle, IonCard, IonButton, IonButtons, IonIcon, IonGrid, IonRow, IonCol, } from '@ionic/react';
import React, { useState, useCallback } from 'react';


import {  ribbon, wifi } from 'ionicons/icons';








const SessionList: React.FC= () => {





 
  return (
    <>
    <div style={{padding:"0.5rem"}}>
    <IonTitle style={{fontSize:"35px",fontWeight:"bold"}}>Hi Ziply work</IonTitle>
    <IonTitle style={{fontSize:"23px"}}>Fri 5, 2022</IonTitle>

    <IonGrid >
            <IonRow>
             
                <IonCol size="6" size-md="6" >
              <IonCard style={{display:"flex",padding:"5px"}}>
         
        <IonButtons>
         <IonButton  >
         <IonIcon style={{fontSize:"26px",color:"green"}} slot="icon-only" icon={ribbon}></IonIcon>
         </IonButton>
         </IonButtons>
      
       <div >
                <IonTitle  style={{fontSize:"12px"}}>Network Status</IonTitle>
         <IonTitle style={{fontSize:"16px"}}>Excellent</IonTitle>
         <IonTitle  style={{fontSize:"12px",color:"green"}}>Test Again</IonTitle>
         </div>
         </IonCard>
                </IonCol>
                <IonCol size="6" size-md="6" >
                  <IonCard style={{display:"flex",padding:"5px"}}>
                <IonButtons>
         <IonButton  >
         <IonIcon style={{fontSize:"18px"}} slot="icon-only" icon={wifi}></IonIcon>
         </IonButton>
         </IonButtons>
         <div>
         <IonTitle  style={{fontSize:"12px"}}>last speed test</IonTitle>
          <IonTitle style={{fontSize:"16px"}}>1080 Mbps</IonTitle>
          <IonTitle  style={{fontSize:"12px",color:"green"}}>Test Again</IonTitle>
         </div>
         </IonCard>
              </IonCol>
              <IonCol size="12" size-md="6" >
              <IonTitle style={{color:"gray",fontSize:"13px"}}>My Payment</IonTitle>
      <IonTitle style={{fontSize:"13px" ,fontWeight:"bold",marginTop:"10px"}}>Ziply Fibre Gig Internet</IonTitle>
      <IonTitle style={{fontSize:"12px",color:"gray",marginTop:"3px"}}>Autoplay Schedule for Oct 2022</IonTitle>
      <IonTitle style={{fontSize:"12px",color:"green",marginTop:"3px"}}>Manage Autoplay</IonTitle>
                </IonCol>
                <IonCol size="12" size-md="12" >
                  <div style={{display:"flex",justifyContent:"center"}}>
                <IonButtons >
         <IonButton  style={{color:"white",width:"300px",borderRadius:"50px",backgroundColor:"green"}} >
     Make  a Payment
         </IonButton>
         </IonButtons>
         </div>
                </IonCol>
                <IonItemDivider/>
                  <IonCol size="12" size-md="6" >
                 
      <IonTitle style={{fontSize:"12px",color:"gray",marginTop:"10px"}}>Special Offer</IonTitle>
      <IonTitle style={{fontSize:"13px" ,fontWeight:"bold",marginTop:"3px"}}>Apply Ziply Fibre Voice</IonTitle>
      <IonTitle style={{fontSize:"12px",marginTop:"3px"}}>For Just 120 $/mo</IonTitle>
                    </IonCol>
            </IonRow>
          </IonGrid>
   
   
     
    
    </div>
    
    
    </>
  );
};

export default SessionList