import Image from "next/image";
import { useRouter } from "next/router";
import { giftItems } from "../constants";

const GiftsSection = () => {
  const router = useRouter();

  const handlePayment = (gift: (typeof giftItems)[0]) => {
    router.push(
      `/payment?item=${encodeURIComponent(
        gift.name
      )}&price=${encodeURIComponent(gift.price)}`
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-warm-beige via-cream-white to-warm-beige pb-20 px-4 relative">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-soft-gold/5 to-muted-rosewood/5"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="font-display text-5xl font-bold text-deep-mocha mb-6">
              Bless Their Journey
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-soft-gold to-transparent mx-auto mb-8"></div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto shadow-xl border border-soft-gold/20">
            <p className="font-body text-xl text-dark-brown leading-relaxed">
              Help us start our new journey together with these meaningful gifts, chosen with love and blessed with faith
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {giftItems.map((gift) => (
            <div
              key={gift.id}
              className="group relative bg-cream-white border-2 border-soft-gold/30 rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:scale-105 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-soft-gold/10 to-muted-rosewood/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="absolute top-4 left-4 w-8 h-8 border border-soft-gold rounded-full flex items-center justify-center">
                <span className="text-soft-gold text-sm">✨</span>
              </div>

              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src={gift.image}
                  alt={gift.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

              </div>

              <div className="p-8 relative z-20">
                <h3 className="font-feature text-2xl font-bold text-deep-mocha mb-3 group-hover:text-soft-gold transition-colors">
                  {gift.name}
                </h3>
                <p className="font-body text-dark-brown/80 mb-6 leading-relaxed">
                  {gift.description}
                </p>

                <div className="mb-6 text-center">
                  <div className="inline-block bg-gradient-to-r from-soft-gold/20 to-muted-rosewood/20 rounded-full px-6 py-2">
                    <span className="font-display text-2xl font-bold text-muted-rosewood">
                      ₦{gift.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handlePayment(gift)}
                  className="w-full bg-gradient-to-r from-deep-mocha to-muted-rosewood hover:from-muted-rosewood hover:to-deep-mocha text-cream-white py-4 rounded-2xl font-body font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border border-soft-gold/30"
                >
                  🎁 Bless with This Gift
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;
