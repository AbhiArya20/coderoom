import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import AuthWrapper from './auth-wrapper';
import Link from 'next/link';

export default function LoginCard() {
  return (
    <AuthWrapper
      title='Login'
      description='Enter your email below to login to your account.'
      isLoginPage={true}
      btnText='Login'
      formAction={async () => {
        'use server';
      }}
    >
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Input id='email' type='email' placeholder='abhiarya329@gmail.com' required autoComplete='email' />
      </div>
      <div className='grid gap-2'>
        <div className='flex items-center'>
          <Label htmlFor='password'>Password</Label>
          <Link href='/forgot-password' className='ml-auto inline-block text-sm underline'>
            Forgot your password?
          </Link>
        </div>
        <Input id='password' type='password' autoComplete='current-password' />
      </div>
    </AuthWrapper>
  );
}
