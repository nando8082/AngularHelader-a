import { TestBed } from '@angular/core/testing';

import { ListarCarroService } from './listar-carro.service';

describe('ListarCarroService', () => {
  let service: ListarCarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarCarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
