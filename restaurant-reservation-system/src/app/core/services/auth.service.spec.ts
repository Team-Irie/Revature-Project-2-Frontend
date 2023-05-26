import { TestBed, getTestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  let service: AuthService;
  let cookie: CookieService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,],
      providers: [AuthService,CookieService]
    });
    injector = getTestBed()
    service = TestBed.inject(AuthService);
    httpMock = injector.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false with failed login', () => {
    const state = false;
    service.login('username','password')
      .subscribe(result => {
        expect(result).toEqual(state)
      })

    const req = httpMock.expectOne(`${environment.url}/users/login`)
    expect(req.request.method).toEqual('POST')
    req.flush(state)
  })

  it('should return true with successful login', ()=>{
    const state = true
    service.login('username','password')
      .subscribe(result=>{
        expect(result).toEqual(state)
      })

    const req = httpMock.expectOne(`${environment.url}/users/login`)
    expect(req.request.method).toEqual('POST')
    req.flush(state)
  })
  
});
