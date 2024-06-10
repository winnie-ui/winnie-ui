import "./whats-next-card.css";

type WhatsNextCardProps = {
  logo: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

export function WhatsNextCard({
  logo,
  title,
  description,
  link,
}: WhatsNextCardProps) {
  return (
    <a className="whats-next-card" href={link}>
      <div>{logo}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
