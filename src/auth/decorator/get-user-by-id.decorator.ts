import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCurrentUserById = createParamDecorator(

    (data: unknown, ctx: ExecutionContext) => {

        const request = ctx.switchToHttp().getRequest()

        console.log(data)

        return request.user.id

    }

)