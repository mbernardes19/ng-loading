import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('quando iniciar, todas as variáveis de estado devem ser false', () => {
    component.ngOnInit();
    expect(component.loading).toBeFalsy();
    expect(component.error).toBeFalsy();
    expect(component.called).toBeFalsy();
  });

  it('quando for iniciar, loading deve ser false', () => {
    component.ngOnInit();
    expect(component.loading).toBeFalsy();
  });

  it('quando loading virar true, deve carregar animação de loading', () => {
    const animacaoAntes = fixture.debugElement.nativeElement.querySelector('#animacao');
    expect(animacaoAntes).toBeFalsy();
    component.loading = true;
    fixture.detectChanges();
    const animacaoDepois = fixture.debugElement.nativeElement.querySelector('#animacao');
    expect(animacaoDepois).toBeTruthy();
  });

  it('quando o tempo de carregamento ultrapassar o timeout, cancelled deve ser true e cancelEvent deve ser emitido', () => {

  });

});
