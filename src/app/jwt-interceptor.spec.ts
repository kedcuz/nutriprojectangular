import { JwtInterceptor } from './jwt-interceptor';

describe('JwtInterceptor', () => {
  it('should create an instance', () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    expect(new JwtInterceptor(routerSpy)).toBeTruthy();
  });
});
