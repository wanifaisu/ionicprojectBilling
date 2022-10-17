import React, { useState } from 'react';
import {IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar,} from '@ionic/react';
import './Account.scss';
import { notifications } from 'ionicons/icons';


const paymentHistory=[
  {name:"Payment",date:"Oct 16",rs:"$60.00",accountNo:"Amit****1490"},
  {name:"Payment",date:"Sep 18",rs:"$60.00",accountNo:"Amir ****1470"},
  {name:"Credit",date:"Nov 29",rs:"$120.00",accountNo:"Sarfaraz ****1278"},
  {name:"Payment",date:"Dec 15",rs:"$70.00",accountNo:"Aqib ****1390"},
]




const Billing: React.FC = () => {

  

  return (
    <IonPage id="account-page">
     <IonHeader translucent={true}>
        <IonToolbar>

            <IonTitle style={{fontSize:"23px"}}>Billing</IonTitle>
          <IonButtons slot="end">
       
              <IonButton >
              <IonIcon slot="icon-only" icon={notifications}></IonIcon>
              </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
     
      <IonContent fullscreen={true}>

      <IonGrid style={{marginTop:"1rem"}} >
            <IonRow>
            <IonCol size="12" size-md="6" >
              <IonTitle style={{color:"gray",fontSize:"13px"}}>My Payment</IonTitle>
      <IonTitle style={{fontSize:"13px" ,fontWeight:"bold",marginTop:"10px"}}>Ziply Fibre Gig Internet</IonTitle>
      <IonTitle style={{fontSize:"12px",color:"gray",marginTop:"3px"}}>Autoplay Schedule for Oct 2022</IonTitle>
      <IonTitle style={{fontSize:"12px",color:"green",marginTop:"3px"}}>Manage Autoplay</IonTitle>
                </IonCol>
                <IonCol size="12" size-md="12" >
                  <div style={{display:"flex",justifyContent:"center"}}>
                <IonButtons >
         <IonButton  style={{color:"while",width:"300px",borderRadius:"50px",backgroundColor:"green"}} >
     Make  a Payment
         </IonButton>
         </IonButtons>
         </div>
                </IonCol>
                <IonCol size="12" size-md="12" >
                <IonSelect style={{border:"1px solid gray"}} placeholder="Current Bill">
      <IonSelectOption value="apples">Apples</IonSelectOption>
      <IonSelectOption value="oranges">Oranges</IonSelectOption>
      <IonSelectOption value="bananas">Bananas</IonSelectOption>
    </IonSelect>
        </IonCol>
      
                <IonCol size="12" size-md="12" >
                
                <IonSelect  style={{border:"1px solid gray"}} placeholder="Billing History">
      <IonSelectOption value="apples">Apples</IonSelectOption>
      <IonSelectOption value="oranges">Oranges</IonSelectOption>
      <IonSelectOption value="bananas">Bananas</IonSelectOption>
      
    </IonSelect>
        </IonCol>
        <IonCol size="12" size-md="12" >
<IonTitle style={{fontSize:"16px",color:"gray"}}>Recent Trensections</IonTitle>
          </IonCol>
          {paymentHistory.map((item,index)=>{
            return(
              <>
          <IonCol key={index} size="6" size-md="12" >
          <div style={{display:"column" ,justifyContent:"center"}}>
<IonTitle style={{fontSize:"16px"}}>{item.name}</IonTitle>
<IonTitle style={{fontSize:"8px"}}>{item.date}</IonTitle>
</div>
            </IonCol>
            <IonCol size="6" size-md="12" style={{display:"flex",justifyContent:"flex-end"}} >
              <div style={{display:"column" ,justifyContent:"center"}}>
<IonTitle style={{fontSize:"16px"}}>{item.rs}</IonTitle>
<IonTitle style={{fontSize:"8px"}}>{item.accountNo}</IonTitle>
</div>
            </IonCol>
            </>
            )})}
</IonRow>
</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Billing