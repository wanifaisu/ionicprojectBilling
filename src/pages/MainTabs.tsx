import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { people, hardwareChipOutline, home, fileTray } from 'ionicons/icons';
import SchedulePage from './SchedulePage';
import Billing from './Billing';





const MainTabs: React.FC = () => {

  return (
    <IonTabs>

      <IonRouterOutlet>
        <Redirect exact path="/" to="/" />
      
        <Route path="/" render={() => <SchedulePage />} exact={true} />
        <Route path="/billing" render={() => <Billing />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href="/">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/billing">
          <IonIcon icon={fileTray} />
          <IonLabel>Billing</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/account">
          <IonIcon icon={people} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/calling">
          <IonIcon icon={hardwareChipOutline} />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;