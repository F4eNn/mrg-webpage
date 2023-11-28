import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
   const path = request.nextUrl.searchParams.get('path');
   const secureToken = request.nextUrl.searchParams.get('secret');

   if (secureToken !== process.env.NEXT_REVALIDATE_TOKEN) {
      return new NextResponse(JSON.stringify('Invalid token'), {
         status: 401,
         statusText: 'Unauthorized',
         headers: {
            'Content-Type': 'application/json',
         },
      });
   }
   if (path) {
      revalidatePath(path, 'page');
      return NextResponse.json({ revalidated: true });
   }
   return NextResponse.json({ revalidated: false, message: 'Missing path to revalidate' });
}
