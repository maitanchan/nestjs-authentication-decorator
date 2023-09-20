import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

const users = require('./user.json')

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) { }

    async register(registerAuthDto: RegisterAuthDto) {

    }

    async login(loginAuthDto: LoginAuthDto) {

        const user = users.find(user => user.email === loginAuthDto.email)

        if (!user) {
            throw new UnauthorizedException()
        }

        if (user.password !== loginAuthDto.password) {
            throw new UnauthorizedException()
        }

        const token = this.jwtService.sign(user)

        return { access_token: token }

    }

    async getUserById(userId: number) {

    }

}
