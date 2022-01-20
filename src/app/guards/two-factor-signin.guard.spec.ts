import { TestBed } from '@angular/core/testing'
import { TwoFactorSigninGuard } from './two-factor-signin.guard'

describe('LinkAccountGuard', () => {
  let guard: TwoFactorSigninGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    guard = TestBed.inject(TwoFactorSigninGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
