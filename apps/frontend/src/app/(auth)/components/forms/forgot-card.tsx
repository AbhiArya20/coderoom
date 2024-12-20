import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import AuthWrapper from './auth-wrapper';

export default function ForgotCard() {
  return (
    <AuthWrapper
      title='Forgot Password'
      description='Enter your email below to forgot to your account.'
      isLoginPage={true}
      btnText='Forgot Password'
      formAction={async () => {
        'use server';
      }}
    >
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Input id='email' type='email' placeholder='abhiarya329@gmail.com' required autoComplete='email' />
      </div>
    </AuthWrapper>
  );
}
