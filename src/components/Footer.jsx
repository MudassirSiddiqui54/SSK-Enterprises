const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 md:px-8">
      <div className="container-narrow mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-2">SSK Enterprises</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Data Center & Cooling Infrastructure Specialists. Authorized Schneider Electric vendor
              with 23+ years of engineering expertise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Services</h4>
            <ul className="space-y-1.5 text-sm text-primary-foreground/70">
              <li>HVAC & Precision Cooling</li>
              <li>Data Center Solutions</li>
              <li>UPS & Power Systems</li>
              <li>Containment Solutions</li>
              <li>Fire Suppression (FM200)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-1.5 text-sm text-primary-foreground/70">
              {["About", "Services", "Data Centers", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "")}`}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} SSK Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
