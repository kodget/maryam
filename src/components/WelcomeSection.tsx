const WelcomeSection = () => {
  return (
    <section className="px-8 py-20 bg-gradient-to-b from-cream-white to-warm-beige text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-soft-gold rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-muted-rosewood rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-soft-gold/20 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="inline-block">
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-deep-mocha mb-6 leading-tight">
              Grace • Serenity • Faith
            </h1>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-soft-gold to-transparent mb-8"></div>
          </div>
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-soft-gold/30">
          <h2 className="font-body text-2xl sm:text-3xl font-semibold text-muted-rosewood mb-6">
            Let's Build Their Home — One Gift at a Time
          </h2>
          <p className="font-body text-lg sm:text-xl text-dark-brown leading-relaxed opacity-90">
            Join family and friends in blessing this sacred union with meaningful gifts that will nurture their journey together.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-soft-gold rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💍</span>
              </div>
              <span className="font-script text-xl text-muted-rosewood">Blessed Union</span>
              <div className="w-8 h-8 bg-soft-gold rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;