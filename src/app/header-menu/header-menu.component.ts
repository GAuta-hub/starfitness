import { Component } from '@angular/core';
import { SizeProp } from '@fortawesome/angular-fontawesome';
import { faDumbbell,faHome,faCalendarDays,faUsers,faUser,faLeaf,faBlog,faLocationDot} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-menu',
  standalone: false,
  
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  faDumbbell = faDumbbell;
  faHome=faHome;
  faCalendarDays=faCalendarDays;
  faUsers=faUsers;
  faUser=faUser;
  faLeaf=faLeaf;
  faBlog=faBlog;
  faLocationDot=faLocationDot;
size: SizeProp="2x";


}
