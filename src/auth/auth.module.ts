import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthStrategy } from './strategy/jwt-auth-strategy';

@Module({

  imports: [

    PassportModule,
    JwtModule.register({
      secret: 'secret-key',
      signOptions: { expiresIn: '1d' }
    })

  ],

  controllers: [
    AuthController
  ],

  providers: [
    AuthService,
    JwtAuthStrategy
  ]

})
export class AuthModule { }
