// Model Card Stylesheets
import "@/stylesheets/components/model-card.css";
// Model Card Requirements
import Image from "next/image";
import Link from "next/link";
// Model Card Props
type Props = {
  category: "inventory" | "queue";
  code: string;
  name: string;
};
// Model Card Main Function
function ModelCard({ category, code, name }: Props) {
  // Returns Model Card Component
  return (
    // Model Card Container
    <Link
      className="model-card-container"
      href={`/${category}/variables?model=${code}`}
    >
      {/* Main Image */}
      <Image
        src={`/${code}.png`}
        alt={name}
        width={247}
        height={140}
        priority
      />
      {/* Main Name */}
      <p>{name}</p>
    </Link>
  );
}

export default ModelCard;
