import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full h-screen relative bg-gradient-to-br from-warm-beige via-cream-white to-warm-beige">
      <div className="absolute inset-0 bg-soft-gold/5 opacity-30"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="font-display text-6xl md:text-8xl font-bold text-soft-gold mb-4 drop-shadow-lg">
              Save the Date
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-soft-gold to-transparent mx-auto mb-6"></div>
          </div>
          
          <div className="mb-8">
            <h2 className="font-feature text-4xl md:text-6xl font-bold text-deep-mocha mb-2">
              Maryam & Abdulqadr
            </h2>
            <p className="font-script text-2xl md:text-3xl text-muted-rosewood">
              Rooted in love, nurtured by faith
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-soft-gold/20">
            <p className="font-body text-xl md:text-2xl text-dark-brown leading-relaxed">
              "Our union blooms like a timeless garden, blessed by divine grace"
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-soft-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-soft-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;