type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  highlight?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  highlight
}: Props) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const wrapper =
    align === 'center'
      ? 'mx-auto max-w-3xl'
      : 'max-w-3xl';

  let titleNode: React.ReactNode = title;
  if (highlight && title.includes(highlight)) {
    const [before, after] = title.split(highlight);
    titleNode = (
      <>
        {before}
        <span className="gradient-text">{highlight}</span>
        {after}
      </>
    );
  }

  return (
    <div className={`${wrapper} ${alignCls}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading text-balance">{titleNode}</h2>
      {description && (
        <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}
