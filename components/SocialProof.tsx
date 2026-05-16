import Link from "@/components/InstantLink";
import { PremiumIcon } from "./PremiumIcons";

interface Testimonial {
  initials: string;
  avatarFrom: string;
  avatarTo: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  resultPrimary: string;
  resultSecondary: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    initials: "MT",
    avatarFrom: "#0A8DFF",
    avatarTo: "#7B5CFF",
    quote:
      "I went to three car dealerships in one weekend without realizing what was happening to my credit. Inquiry Removal removed 19 inquiries in 47 days and my score jumped 94 points. We just closed on our first home — and none of it would have happened without this team.",
    name: "Marcus T.",
    role: "First-Time Home Buyer",
    location: "Phoenix, AZ",
    resultPrimary: "19 inquiries removed",
    resultSecondary: "+94 points in 47 days",
  },
  {
    initials: "DR",
    avatarFrom: "#7B5CFF",
    avatarTo: "#FF4FA3",
    quote:
      "Someone had been using my information everywhere — I found 34 inquiries on my report from companies I'd never heard of. Robert's team removed every single one of them within 61 days. My score went up 112 points and I finally feel like I have my credit — and my life — back.",
    name: "Diana R.",
    role: "Identity Theft Victim",
    location: "Houston, TX",
    resultPrimary: "34 fraudulent inquiries removed",
    resultSecondary: "+112 points in 61 days",
  },
  {
    initials: "KD",
    avatarFrom: "#FF4FA3",
    avatarTo: "#0A8DFF",
    quote:
      "I spent months trying to dispute on my own and got nowhere. One call with Inquiry Removal changed everything. They knew exactly which laws applied and which bureau to push on. 27 inquiries gone in 55 days, and I'm finally getting approved again.",
    name: "Kevin D.",
    role: "Small Business Owner",
    location: "Atlanta, GA",
    resultPrimary: "27 inquiries removed",
    resultSecondary: "+97 points in 55 days",
  },
];

export function SocialProof() {
  return (
    <section className="proof" aria-labelledby="proof-heading">
      <div className="container">
        <header className="proof-header">
          <h2 id="proof-heading">Real Clients. Real Inquiries Removed. Real Score Increases.</h2>
        </header>

        <ul className="proof-grid">
          {TESTIMONIALS.map((t, idx) => (
            <li key={idx} className={`proof-card ${idx === 0 ? "proof-card-featured" : ""}`}>
              <span className="sr-only">5 out of 5 stars</span>
              <div className="proof-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <PremiumIcon key={i} name="star" size={14} />
                ))}
              </div>

              <blockquote className="proof-quote">
                <p>"{t.quote}"</p>
              </blockquote>

              <div className="proof-result">
                <div className="proof-result-icon" aria-hidden="true">
                  <PremiumIcon name="checkBadge" size={15} strokeWidth={1.9} />
                </div>
                <div>
                  <div className="proof-result-primary">Result Tag: {t.resultPrimary}</div>
                  <div className="proof-result-secondary">
                    {t.resultSecondary}
                  </div>
                </div>
              </div>

              <footer className="proof-attribution">
                <div
                  className="proof-avatar"
                  style={{
                    background: `linear-gradient(135deg, ${t.avatarFrom}, ${t.avatarTo})`,
                  }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <cite className="proof-cite">
                  <div className="proof-name">{t.name}</div>
                  <div className="proof-meta">
                    {t.role} · {t.location}
                  </div>
                </cite>
              </footer>
            </li>
          ))}
        </ul>

        <div className="proof-footer">
          <Link href="/results" className="proof-link">
            See More Results <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
</section>
  );
}
