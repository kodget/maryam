const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-deep-mocha to-muted-rosewood text-cream-white py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="w-6 h-px bg-soft-gold"></div>
          <span className="text-soft-gold text-lg">✨</span>
          <div className="w-6 h-px bg-soft-gold"></div>
        </div>
        
        <p className="font-body text-sm">
          Crafted with love by{' '}
          <a
            href="https://www.linkedin.com/company/nexatage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-soft-gold hover:text-cream-white font-medium transition-colors underline decoration-soft-gold/50 hover:decoration-cream-white"
          >
            Nexatage
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;