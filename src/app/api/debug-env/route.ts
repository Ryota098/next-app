import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    TEST_ENV: process.env.TEST_ENV || null,
    NEXT_PUBLIC_TEST_ENV: process.env.NEXT_PUBLIC_TEST_ENV || null,
    NODE_ENV: process.env.NODE_ENV || null,
  })
}
