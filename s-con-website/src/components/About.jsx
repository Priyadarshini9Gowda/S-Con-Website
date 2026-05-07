import { CheckCircle2, Lightbulb, Users2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" style={{ background: "#0f0f0f", padding: "96px 0", position: "relative" }}>
      {/* Section separator top */}
      <div className="section-sep" />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>

          {/* Left: Image block */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/5", maxHeight: 560 }}>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=85&auto=format&fit=crop"
                alt="S-Con construction professionals at work"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Overlay gradient */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)", borderRadius: 20 }} />
            </div>

            {/* Floating experience badge */}
            <div className="float" style={{
              position: "absolute", bottom: -20, right: -20,
              background: "linear-gradient(135deg,#D4AF37,#FFD700)",
              borderRadius: 16, padding: "20px 24px",
              textAlign: "center", boxShadow: "0 12px 40px rgba(212,175,55,0.4)"
            }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "2.2rem", color: "#000" }}>10+</div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#000", textTransform: "uppercase", letterSpacing: "0.1em" }}>Years in<br />Auckland</div>
            </div>

            {/* Corner accents */}
            <div style={{ position: "absolute", top: 12, left: 12, width: 50, height: 50, borderTop: "2px solid rgba(212,175,55,0.5)", borderLeft: "2px solid rgba(212,175,55,0.5)", borderRadius: "8px 0 0 0" }} />
            <div style={{ position: "absolute", bottom: 12, right: 12, width: 50, height: 50, borderBottom: "2px solid rgba(212,175,55,0.5)", borderRight: "2px solid rgba(212,175,55,0.5)", borderRadius: "0 0 8px 0" }} />
          </div>

          {/* Right: Content */}
          <div>
            <div className="section-chip">
              <Users2 size={13} /> About Us
            </div>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
              Auckland's Go-To<br /><span className="gold-text">Construction Team</span>
            </h2>
            <div className="gold-bar" style={{ marginBottom: 28 }} />

            <p style={{ color: "#9ca3af", fontSize: "1rem", lineHeight: 1.8, marginBottom: 20 }}>
              S-Con Limited is a trusted Auckland-based construction company dedicated to delivering high-quality building, renovation, and maintenance services across all of Auckland. We pride ourselves on craftsmanship, reliability, and exceeding client expectations on every project.
            </p>
            <p style={{ color: "#9ca3af", fontSize: "1rem", lineHeight: 1.8, marginBottom: 32 }}>
              Whether you're building a new home, renovating an existing property, or need urgent structural repairs — our team of experienced professionals brings the expertise and dedication to bring your vision to life.
            </p>

            {/* Checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {[
                "Licensed, insured, and fully compliant professionals",
                "Serving all Auckland and surrounding areas",
                "No job too big or too small — free quotes always",
              ].map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <CheckCircle2 size={18} color="#D4AF37" style={{ flexShrink: 0 }} />
                  <span style={{ color: "#d1d5db", fontSize: "0.95rem" }}>{p}</span>
                </div>
              ))}
            </div>

            {/* Mission */}
            <div style={{ display: "flex", gap: 16, padding: 20, background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: 14 }}>
              <Lightbulb size={22} color="#D4AF37" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ color: "#D4AF37", fontWeight: 700, fontSize: "0.85rem", marginBottom: 6 }}>Our Mission</div>
                <p style={{ color: "#9ca3af", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  To deliver exceptional construction services that enhance the lives of our clients and the communities we serve — with integrity, quality, and pride.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section separator bottom */}
      <div className="section-sep" style={{ marginTop: 96 }} />
    </section>
  );
}
