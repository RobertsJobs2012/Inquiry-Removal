import { PremiumIcon } from "./PremiumIcons";

type PainLayer = { label: string; text: string };

interface PainCard {
  headline: string;
  description?: string;
  layers?: PainLayer[];
}

const PAIN_CARDS: PainCard[] = [
  {
    headline:
      "You went to one dealership and woke up with 20 hard inquiries",
    description:
      "You told them not to shop your application around. They did it anyway. Now you're watching your score tank for something you never actually agreed to.",
  },
  {
    headline: "There's an inquiry on your report you don't even recognize",
    description:
      "You didn't apply for anything. But there it is — a hard pull from a company you've never heard of. That's not a glitch. That's unauthorized. And it's costing you points every single month it sits there.",
  },
  {
    headline:
      "The home you've been working toward keeps slipping further away",
    layers: [
      {
        label: "Surface",
        text: "Your lender said your score isn't quite high enough.",
      },
      {
        label: "Real",
        text: "The hard inquiries dragging your number down aren't even yours — you never authorized them.",
      },
      {
        label: "Deep",
        text: "The life you've been building toward — the neighborhood, the front door, the fresh start — feels further away every time you check your report.",
      },
    ],
  },
  {
    headline: "You tried disputing them yourself and hit a wall",
    description:
      'You sent letters. You filed disputes. The bureau came back and said the inquiry was "verified." What they didn\'t tell you is that "verified" and "authorized" are two different things — and that distinction is exactly where we win.',
  },
  {
    headline:
      "You've been paying a credit repair company for months and nothing has moved",
    layers: [
      {
        label: "Surface",
        text: "Another monthly charge hit your account this week.",
      },
      {
        label: "Real",
        text: "Six months in, those same inquiries are still sitting on your report.",
      },
      {
        label: "Deep",
        text: "You trusted someone with your financial future and they've been billing you while your credit stands completely still.",
      },
    ],
  },
  {
    headline:
      "You've been told hard inquiries can't be removed — and that's simply wrong",
    description:
      "Unauthorized hard inquiries can absolutely be removed. Federal law gives you that right. Most people just don't know which laws apply, how to use them, or who actually specializes in doing this correctly.",
  },
];

export function ProblemMirror() {
  return (
    <section className="problem" aria-labelledby="problem-heading">
      <div className="container">
        <header className="problem-header">
          <h2 id="problem-heading">
            Does Any of This Sound Familiar?
          </h2>
        </header>

        <div className="problem-grid">
          {PAIN_CARDS.map((card, idx) => (
            <article key={idx} className="pain-card">
              <div className="pain-card-icon" aria-hidden="true">
                <PremiumIcon name="warningDiamond" size={18} strokeWidth={1.8} />
              </div>

              <h3 className="pain-card-headline">{card.headline}</h3>

              {card.description && (
                <p className="pain-card-description">{card.description}</p>
              )}

              {card.layers && (
                <div className="pain-card-layers">
                  {card.layers.map((layer) => (
                    <div key={layer.label} className="pain-layer">
                      <span className="pain-layer-label">{layer.label} pain</span>
                      <p className="pain-layer-text">{layer.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <p className="problem-transition">
          Here is what most people never find out — the hard inquiries that
          don't belong on your report{" "}
          <strong>don't have to stay there for two years.</strong> You have
          federal rights. We know exactly how to use them.
        </p>
      </div>
</section>
  );
}
