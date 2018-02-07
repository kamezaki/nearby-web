import { AuthService } from './auth.service';
import { CurrentLocationService } from './current-location.service';
import { GatewayService } from './gateway.service';

export { AuthService } from './auth.service';
export { CurrentLocationService } from './current-location.service';
export { GatewayService } from './gateway.service';

export const SERVICE_PROVIDERS = [
    AuthService,
    CurrentLocationService,
    GatewayService
];
