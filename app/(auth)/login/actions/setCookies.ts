'use server'

import { cookies } from 'next/headers'

// Temporary set expiration for an hour
var now = new Date();
var time = now.getTime();
time += 3600 * 1000;
now.setTime(time);

export async function setupAccessTokenCookie(data: { access_token: string }): Promise<void> {
  cookies().set({
    name: 'access_token',
    value: data.access_token,
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    expires: now
  })
}