import { AuthGuard } from './auth-guard';

describe('AuthGuard', () => {
  it('should create an instance', () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    expect(new AuthGuard(routerSpy)).toBeTruthy();
  });
});
