import { Component } from '@angular/core';
import { WelcomeUserBannerComponent } from '../../components/welcome-user-banner/welcome-user-banner.component';
import { MySolutioncardsComponent } from '../../components/my-solutioncards/my-solutioncards.component';

@Component({
  selector: 'app-history-and-statements',
  imports: [WelcomeUserBannerComponent, MySolutioncardsComponent],
  templateUrl: './history-and-statements.component.html',
  styleUrl: './history-and-statements.component.scss'
})
export class HistoryAndStatementsComponent {

}
