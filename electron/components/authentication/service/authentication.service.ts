export class AuthenticationService {
  private static authenticationService: AuthenticationService

  private constructor() {}

  static getInstance(): AuthenticationService {
    if (!AuthenticationService.authenticationService) {
      AuthenticationService.authenticationService = new AuthenticationService
    }
    return AuthenticationService.authenticationService
  }
}