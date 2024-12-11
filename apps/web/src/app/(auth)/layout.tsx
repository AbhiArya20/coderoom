'use client';
import AuthLeft from './components/auth-layout/left';
import AuthRight from './components/auth-layout/right';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='w-screen h-screen bg-orange-500 select-none'>
      <div className='flex items-center h-full w-full'>
        <div className='h-full md:w-1/2 lg:w-3/5 bg-black hidden md:block'>
          <AuthLeft />
        </div>
        <AuthRight>{children}</AuthRight>
      </div>
    </main>
  );
}
/*
LightMode
  xs
    position
    layout
    height width
    padding margin
    color
    shadow/Filter
    animation/transition
    transform
    typography
    borders
    others
  sm
  md
  lg
  xl
  2xl
DarkMode
*/
