import { SignIn } from '@clerk/clerk-react';
import { ReactNode } from 'react';

import bg from '../assets/images/bg.jpg';

const SignIns = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <div
        className="flex h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <SignIn
          routing="path"
          path="/sign-in"
          afterSignInUrl="/dashboard"
          redirectUrl="/dashboard"
        />
        {children}
      </div>
    </div>
  );
};

export default SignIns;
