import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
import { AuroraText } from '@/components/magicui/aurora-text';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <div className="w-32 text-white md:w-40">
                {<AuroraText className="text-3xl font-bold text-white hover:text-blue-200 transition-colors">
                    Acme.
                </AuroraText>}
            </div>
            <h1 className="text-2xl font-semibold">Login</h1>
            <p className="text-sm">Please enter your credentials to continue.</p>
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}