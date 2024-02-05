import { Routes } from '@angular/router';
import { EmulatorComponent } from './is-emulator/emulator-detect.component';

export const routes: Routes = [
 
    {
      path:'',
      component: EmulatorComponent,
      pathMatch: 'full'
    }
    
];
