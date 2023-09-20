import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { GetCurrentUserById } from './decorator/get-user-by-id.decorator';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register(@Body() registerAuthDto: RegisterAuthDto) {

        return this.authService.register(registerAuthDto)

    }

    @Post('login')
    login(@Body() loginAuthDto: LoginAuthDto) {

        return this.authService.login(loginAuthDto)

    }

    @UseGuards(JwtAuthGuard)
    @Get('protected')
    getUserById(@GetCurrentUserById() userId: number) {

        return this.authService.getUserById(userId)

    }

}
