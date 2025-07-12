import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  @Input() tareas: string[] = [];
  @Output() eliminar = new EventEmitter<number>();

  eliminarTarea(index: number) {
    this.eliminar.emit(index);
  }
}
