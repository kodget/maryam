import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { bankDetails } from "../constants";

const Payment = () => {
  const router = useRouter();
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [copied, setCopied] = useState("");

  useEffect(() => {
    if (router.query.item && router.query.price) {
      setItemName(router.query.item as string);
      setPrice(router.query.price as string);
    }
  }, [router.query]);

  const copyToClipboard = (text: string, type: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(type);
          setTimeout(() => setCopied(""), 2000);
        });
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(type);
        setTimeout(() => setCopied(""), 2000);
      }
    } catch (err) {
      alert(`Copy failed. Please manually copy: ${text}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-cream-white to-warm-beige py-12 px-4 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="bg-cream-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-2 border-soft-gold/30">
          <div className="text-center mb-8">
            <div className="mb-6">
              <h1 className="font-display text-4xl font-bold text-deep-mocha mb-4">
                Complete Your Blessing
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-soft-gold to-transparent mx-auto"></div>
            </div>
            
            <div className="bg-gradient-to-r from-soft-gold/20 to-muted-rosewood/20 p-6 rounded-2xl border border-soft-gold/30">
              <h2 className="font-feature text-2xl font-semibold text-muted-rosewood mb-2">
                {itemName}
              </h2>
              <p className="font-display text-3xl font-bold text-deep-mocha">
                ₦{price}
              </p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl mb-6 border border-soft-gold/20">
            <h3 className="font-body text-xl font-semibold text-deep-mocha mb-4 text-center">
              🏦 Bank Transfer Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Account Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold">
                    {bankDetails.accountNumber}
                  </span>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountNumber, 'account')}
                    className="bg-gradient-to-r from-deep-mocha to-muted-rosewood hover:from-muted-rosewood hover:to-deep-mocha text-cream-white px-4 py-2 rounded-lg text-sm transition-all duration-300 shadow-lg"
                  >
                    {copied === 'account' ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Bank Name:</span>
                <span className="font-semibold">{bankDetails.bankName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Account Name:</span>
                <span className="font-semibold">{bankDetails.accountName}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-soft-gold/10 to-muted-rosewood/10 border-2 border-soft-gold/30 p-8 rounded-3xl">
            <div className="text-center mb-6">
              <h3 className="font-display text-2xl font-bold text-deep-mocha mb-3">
                💕 Blessed by Your Generosity
              </h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-soft-gold to-transparent mx-auto"></div>
            </div>
            
            <p className="font-body text-dark-brown mb-4 leading-relaxed text-center">
              Your thoughtful blessing means the world to us. This gift will help create beautiful memories and nurture our sacred journey together.
            </p>
            <p className="font-body text-dark-brown mb-6 leading-relaxed text-center">
              Please transfer the amount to the account details above. Once completed, we'll coordinate with love and gratitude.
            </p>
            
            <div className="text-center">
              <p className="font-script text-xl text-muted-rosewood mb-2">
                With heartfelt gratitude & divine blessings,
              </p>
              <p className="font-feature text-2xl font-bold text-deep-mocha">
                Maryam & Abdulqadr ❤️
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => router.push("/")}
              className="bg-gradient-to-r from-deep-mocha to-muted-rosewood hover:from-muted-rosewood hover:to-deep-mocha text-cream-white px-8 py-3 rounded-2xl font-body font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Back to Gifts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;