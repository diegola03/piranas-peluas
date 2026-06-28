type Props = {
  kicker?: string;
  title: string;
};

export default function SectionTitle({ kicker, title }: Props) {
  return (
    <div className="mb-10 text-center reveal">
      {kicker && (
        <p className="mb-3 font-sans text-xs uppercase tracking-widest2 text-gold/70">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-4xl font-semibold text-bone sm:text-5xl">
        <span className="gold-foil">{title}</span>
      </h2>
      <div className="gold-rule mx-auto mt-5 w-24" />
    </div>
  );
}
