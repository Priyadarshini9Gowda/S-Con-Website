import { Hammer, Building2, Wrench, HardHat, Calculator, Trees, Zap, Grid3x3, Sparkles, Sofa, PaintBucket, Layers } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "General Contracting",
    desc: "Full-scope construction managed from start to finish with precision and professionalism.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Design & New Build",
    desc: "Bespoke design and new build services tailored to your vision, from concept to completion.",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    desc: "Transform your existing space with expert renovation solutions that add lasting value.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: HardHat,
    title: "Structural Repairs",
    desc: "Expert assessment and repair of structural issues to ensure safety and integrity.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop&crop=left",
  },
  {
    icon: Calculator,
    title: "Budget Estimation & Material Selection",
    desc: "Accurate cost estimation and smart material selection to keep your project on budget.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: Trees,
    title: "Driveways, Retaining Walls & Paving",
    desc: "Durable, attractive driveways, retaining walls, and paving for any property.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Plumbing, Electrical & Insulation",
    desc: "Certified professionals handling all plumbing, electrical wiring, and insulation needs.",
    img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: Grid3x3,
    title: "Tiles and Flooring",
    desc: "Premium tiling and flooring installations across kitchens, bathrooms, and living areas.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop&crop=entropy&sat=-100",
  },
  {
    icon: Sparkles,
    title: "House Cleaning",
    desc: "Professional post-construction and general house cleaning services to a high standard.",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: Sofa,
    title: "Carpenter & Interior Redesigns",
    desc: "Custom carpentry and interior redesign to refresh and personalise your living space.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: PaintBucket,
    title: "Exterior Cladding, Painting & Roofing",
    desc: "Complete exterior upgrades — cladding, painting, and roofing to protect your home.",
    img: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: Layers,
    title: "Decks, Patios & Fencing",
    desc: "Beautiful outdoor structures built to last and enhance your lifestyle.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop",
  },
];


export default function Services() {
  return (
    <section id="services" style={{ background: "#0a0a0a", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-chip" style={{ margin: "0 auto 20px" }}>
            <Hammer size={13} /> What We Do
          </div>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", marginBottom: 16 }}>
            Our <span className="gold-text">Services</span>
          </h2>
          <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,#D4AF37,#FFD700)", borderRadius: 2, margin: "0 auto 20px" }} />
          <p style={{ color: "#9ca3af", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
            From structural foundations to interior finishes — we cover every aspect of construction and renovation.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 24 }}>
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="service-card">
                {/* Service image */}
                <div style={{ overflow: "hidden", position: "relative" }}>
                  <img src={s.img} alt={s.title} loading="lazy" />
                  {/* Gold overlay on image */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 60%)" }} />
                </div>
                {/* Card body */}
                <div className="card-body">
                  <div className="card-icon"><Icon size={20} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }}
            className="btn-gold"
          >
            Get A Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
