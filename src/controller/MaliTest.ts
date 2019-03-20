export module SmokeTest
{
    export async function Login (ctx) {
        ctx.res = {loginMessage: 'Hi '.concat(ctx.req.name)}
    }
}

