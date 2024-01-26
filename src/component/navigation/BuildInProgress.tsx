import * as React from 'react';



export const BuildInProgress: React.FC = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center animate-fadeIn">
        <div className="fixed mx-auto text-transparent bg-clip-text text-center self-center font-title bg-gradient-to-r from-pink from-[20%] to-green">
            Thank you for visiting.<br/>Page coming soon.
        </div>
    </div>
  );
}
