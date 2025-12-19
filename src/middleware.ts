import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get('token')
  const path = req.cookies.get('path')

  try {
    if (req.nextUrl.pathname == '/') {
      if (token?.value) {
        const url = req.nextUrl.clone()
        url.pathname = path?.value ? path.value : '/'
        return NextResponse.redirect(url)
      } else {
        const url = req.nextUrl.clone()
        url.pathname = '/'
        return NextResponse.redirect(url)
      }
    }

    if (req.nextUrl.pathname.toString() == '/login') {
      if (token?.value) {
        const url = req.nextUrl.clone()
        url.pathname = path?.value ? path.value : '/admin/home'
        return NextResponse.redirect(url)
      } else {
        return NextResponse.next()
      }
    }

    if (req.nextUrl.pathname.startsWith('/admin')) {
      if (token?.value) {
        if (path?.value) {
          const url = req.nextUrl.clone()
          url.pathname = path?.value
          return NextResponse.redirect(url)
        } else {
          return NextResponse.next()
        }
      } else {
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
      }
    }

    return NextResponse.next()
  } catch (error) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/', '/login', '/admin/:path*'],
}
