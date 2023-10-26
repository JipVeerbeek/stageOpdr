import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { headerComponent } from './header.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [headerComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(headerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'stageOpdr'`, () => {
    const fixture = TestBed.createComponent(headerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('stageOpdr');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(headerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('stageOpdr app is running!');
  });
});
