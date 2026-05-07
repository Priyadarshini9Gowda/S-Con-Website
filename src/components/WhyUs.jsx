import { ShieldCheck, Clock, DollarSign, Users, Award, Handshake } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Quality You Can Trust", desc: "Every project meets NZ building standards. We never cut corners — your satisfaction is our guarantee." },
  { icon: Clock, title: "On Time, Every Time", desc: "We respect your time. Strict scheduling and transparent communication keeps projects on track." },
  { icon: DollarSign, title: "Competitive Pricing", desc: "Premium quality at fair prices. Honest quotes with no hidden costs, ever." },
  { icon: Users, title: "Experienced Team", desc: "Our skilled tradespeople bring years of hands-on experience to every job — big or small." },
  { icon: Award, title: "End-to-End Service", desc: "From planning and estimation to final coat of paint — we handle everything under one roof." },
  { icon: Handshake, title: "Built on Relationships", desc: "We build lasting relationships through honest, reliable service and genuine care for our clients." },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=1920&q=70&auto=format&fit=crop"
          alt="Construction team"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,27,53,0.97) 0%, rgba(10,10,10,0.93) 100%)" }} />
      </div>

      <div className="section-sep" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="section-sep" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-chip" style={{ margin: "0 auto 20px" }}>
            <Award size={13} /> Why Choose Us
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", marginBottom: 16 }}>
            The <span className="gold-text">S-Con</span> Difference
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,#D4AF37,#FFD700)", borderRadius: 2, margin: "0 auto 20px" }} />
          <p style={{ color: "#9ca3af", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto" }}>
            Professionalism, craftsmanship, and genuine care on every project we take on.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
          {reasons.map(r => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="why-card">
                <div className="why-icon"><Icon size={22} /></div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: "1rem", color: "#fff", marginBottom: 8 }}>{r.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#9ca3af", lineHeight: 1.65 }}>{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust bar */}
        <div style={{
          marginTop: 56, padding: "28px 36px",
          background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)",
          borderRadius: 16, display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: 20,
        }}>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#fff" }}>
              Ready to start your project?
            </div>
            <div style={{ color: "#9ca3af", fontSize: "0.9rem", marginTop: 4 }}>
              Get a free, no-obligation quote from our team today.
            </div>
          </div>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }}
            className="btn-gold"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
