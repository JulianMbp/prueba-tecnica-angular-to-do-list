import { TestBed } from '@angular/core/testing';

import { ListaTareaService } from './lista-tarea.service';

describe('ListaTareaService', () => {
  let service: ListaTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
