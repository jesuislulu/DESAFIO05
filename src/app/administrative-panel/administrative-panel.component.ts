import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FullNamePipe } from '../shared/pipes/full-name.pipe';

@Component({
  selector: 'app-administrative-panel',
  templateUrl: './administrative-panel.component.html',
  styleUrls: ['./administrative-panel.component.scss']
})
export class AdministrativePanelComponent {
  showFiller = false;
  name: string = "";

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  navigate(value:number) {
    switch (value) {
      case 1:
        this.router.navigate(['/panel/form'], {queryParams: {name: "Registro"}});
        break;
      case 2:
        this.router.navigate(['/panel/students'], {queryParams: {name: "Lista"}});
        break;
      case 3:
        this.router.navigate(['/panel/attendance'], {queryParams: {name: "Asistencia"}});
        break;
      case 4:
        this.router.navigate(['/panel/course'], {queryParams: {name: "Cursos"}});
        break;
      default:
        this.router.navigate(['/'])
        break;
    }
  }
}
