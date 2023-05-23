import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { UserService } from './user.service';
import { createEmptyUser } from '../common/models'
import { environment } from 'src/environments/environment';

describe('UserService', () => {
  let service: UserService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        UserService,
      ]
    });
    injector = getTestBed();
    service = TestBed.inject(UserService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create user', ()=>{
    const user = createEmptyUser();
    service.create(user).subscribe();

    const req = httpMock.expectOne(`${environment.url}/users/`)
    expect(req.request.method).toEqual('POST')
  })

  it('should get user by id', ()=>{
    const user = createEmptyUser();
    service.getUserById(1).subscribe( result => {
      expect(result).toEqual(user)
    })

    const req = httpMock.expectOne(`${environment.url}/users/1`)
    expect(req.request.method).toEqual('GET')
    req.flush(user)
  })

  it('should get all users', ()=>{
    const users = [createEmptyUser(),createEmptyUser()]
    service.get().subscribe( result => {
      expect(result.length).toBe(2)
      expect(result).toEqual(users)
    })

    const req = httpMock.expectOne(`${environment.url}/users/`)
    expect(req.request.method).toEqual('GET')
    req.flush(users)
  })

  it('should update the user', ()=>{
    const user = createEmptyUser()
    service.update(user).subscribe(result => {
      expect(result).toEqual(user)
    })

    const req = httpMock.expectOne(`${environment.url}/users/`)
    req.flush(user)
  })

  // TODO
  // it('should throw an error', ()=>{})

});
