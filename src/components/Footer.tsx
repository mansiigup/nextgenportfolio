const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mansi Gupta. Built with purpose.
          </p>
          <p className="text-sm text-muted-foreground">
            Senior Product Manager • 0→1 Builder • AI Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
