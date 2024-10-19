import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngIf
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import{CrudComponent} from './componentes/crud/crud.component';
import { RouterModule  } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegistroComponent,CrudComponent,RouterModule,HttpClientModule], // Asegúrate de agregar CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

