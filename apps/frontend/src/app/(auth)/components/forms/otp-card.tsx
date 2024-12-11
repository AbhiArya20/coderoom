import { Label } from '@/src/components/ui/label';
import CustomOtpInput from './otp-input';
import AuthWrapper from './auth-wrapper';

export default function OTPCard({ email }: { email: string }) {
  return (
    <AuthWrapper
      title='Verify Email'
      description='We have send you a six digit OTP on your email.'
      isLoginPage={false}
      btnText='Verify'
      formAction={async () => {
        'use server';
      }}
    >
      <div className='-mt-6 font-bold'>{email}</div>
      <div className='grid gap-2'>
        <Label htmlFor='otp'>
          <span>OTP</span>
        </Label>
        <CustomOtpInput length={6} onChange={() => { }} />
      </div>
    </AuthWrapper>
  );
}
