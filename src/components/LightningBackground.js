import React from "react";
import { cn } from "../lib/utils"; // Pastikan path ini benar

export const Lightning = ({ className }) => {
  const lightning = Array.from({ length: 15 });

  return (
    <div className={cn("absolute top-0 left-1/2 h-full w-[150%] -translate-x-1/2 -z-10", "bg-no-repeat bg-top bg-[length:100%_auto]", "bg-[url(https://reactbits.dev/images/lightning/bg.png)]", "flex justify-center", className)}>
      <div className="absolute top-0 h-full w-full bg-slate-950/90 backdrop-blur-sm -z-10" />
      <div className="absolute top-0 h-full w-full bg-slate-950/50 -z-10" />

      {lightning.map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-px animate-lightning bg-gradient-to-b from-transparent via-fuchsia-500/20 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 2 + 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

// Ubah nama komponen utama agar mudah dipanggil
const LightningBackground = () => {
  return <Lightning />;
};

export default LightningBackground;
