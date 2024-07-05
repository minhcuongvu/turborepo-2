'use server'

export async function SendIt() {
  console.log('Send it!');
  console.log('HELLO', process.env.HELLO);
  console.log('APP_NODE_ENV', process.env.APP_NODE_ENV);
}