import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadraPokemonComponent } from './squadra-pokemon.component';

describe('SquadraPokemonComponent', () => {
  let component: SquadraPokemonComponent;
  let fixture: ComponentFixture<SquadraPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquadraPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquadraPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
