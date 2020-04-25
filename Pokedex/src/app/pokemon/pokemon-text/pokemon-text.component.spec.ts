import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTextComponent } from './pokemon-text.component';

describe('PokemonTextComponent', () => {
  let component: PokemonTextComponent;
  let fixture: ComponentFixture<PokemonTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
