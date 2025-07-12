import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaTareaService {
  private _tareas = signal<string[]>([]);
  tareas = this._tareas.asReadonly();
  totalTareas = computed(() => this._tareas().length);
  
  agregarTarea(tarea: string): boolean {
    const tareaLimpia = tarea.trim();
    if (!tareaLimpia) {
      return false; 
    }
    if (tareaLimpia.length > 100) {
      return false;
    }
    if (this._tareas().includes(tareaLimpia)) {
      return false;
    }
    this._tareas.update(lista => [...lista, tareaLimpia]);
    return true;
  }
  eliminarTarea(index: number): boolean {
    if (index < 0 || index >= this._tareas().length) {
      return false; 
    }
    
    this._tareas.update(lista => lista.filter((_, i) => i !== index));
    return true;
  }
  limpiarTodas(): void {
    this._tareas.set([]);
  }
}
