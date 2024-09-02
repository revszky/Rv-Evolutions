import React from "react";

const AuthenticityProtection = () => {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="flex items-start gap-10 xl:gap-32">
        <div className="text-left">
          <h1 className="font-mono font-bold">AUTHENTICITY PROTECTION</h1>
        </div>

        <div className="text-left">
          <div className="max-w-xl xl:max-w-4xl pb-2">
            <p className="font-mono text-sm">
              We are committed to maintaining the safety and authenticity of
              every product we offer. Every item you purchase through our system
              has gone through a series of rigorous verification processes
              designed to protect you from counterfeit products. This
              verification system is an integral part of our efforts to ensure
              that every product you receive is 100% authentic, made to the
              highest quality standards, and meets your expectations.
            </p>
          </div>

          <div className="hidden md:block max-w-xl xl:max-w-4xl pt-2">
            <p className="font-mono text-sm">
              Your trust is the most valuable thing for us. Therefore, we
              continue to innovate and improve our systems to provide the best
              protection against counterfeit goods. With our products, you not
              only get high quality goods, but also the peace of mind that comes
              with knowing that you have an authentic product, made with the
              utmost dedication and craftsmanship.
            </p>
          </div>
        </div>
      </div>

      <div className="block md:hidden max-w-xl xl:max-w-4xl pt-2">
        <p className="text-center font-mono text-sm">
          Your trust is the most valuable thing for us. Therefore, we continue
          to innovate and improve our systems to provide the best protection
          against counterfeit goods. With our products, you not only get high
          quality goods, but also the peace of mind that comes with knowing that
          you have an authentic product, made with the utmost dedication and
          craftsmanship.
        </p>
      </div>
    </div>
  );
};

export default AuthenticityProtection;
