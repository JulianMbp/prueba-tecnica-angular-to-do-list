import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ListaTareaService } from './lista-tarea.service';
import { TareasComponent } from './tareas/tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TareasComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nuevaTarea = '';
  mensajeError = '';
  tareas;
  totalTareas;

  constructor(private tareaService: ListaTareaService) {
    this.tareas = this.tareaService.tareas;
    this.totalTareas = this.tareaService.totalTareas;
  }

  agregarTarea() {
    this.mensajeError = '';
    if (!this.nuevaTarea.trim()) {
      this.mensajeError = 'La tarea no puede estar vacia';
      return;
    }
    if (this.nuevaTarea.trim().length > 100) {
      this.mensajeError = 'La tarea no puede tener mas de 100 caracteres';
      return;
    }
    const agregada = this.tareaService.agregarTarea(this.nuevaTarea);
    if (agregada) {
      this.nuevaTarea = '';
    } else {
      this.mensajeError = 'Esta tarea ya existe';
    }
  }

  eliminarTarea(index: number) {
    this.tareaService.eliminarTarea(index);
  }
  
  limpiarTodas() {
    this.tareaService.limpiarTodas();
  }
}
