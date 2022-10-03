import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const handlers = [
  rest.get('https://catfact.ninja/fact', (req: any, res: any, ctx: any) => {
    return res(
      ctx.json({
        fact: 'this is a cat fact'
      }),
    )
  }),
]

// Setup requests interception using the given handlers.
export const server = setupServer(...handlers)