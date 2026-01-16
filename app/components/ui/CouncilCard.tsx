import SpotlightCard from "./SpotlightCard";

interface CouncilCardProps {
  icon: string;
  title: string;
  description: string;
  activities: string[];
  gradientFrom: string;
  gradientTo: string;
  spotlightColor: string;
  accentColor: string;
}

export function CouncilCard({
  icon,
  title,
  description,
  activities,
  gradientFrom,
  gradientTo,
  spotlightColor,
  accentColor,
}: CouncilCardProps) {
  return (
    <SpotlightCard
      className="p-8 h-full"
      spotlightColor={
        spotlightColor as `rgba(${number}, ${number}, ${number}, ${number})`
      }
    >
      <div className="space-y-6">
        <div
          className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-4xl`}
        >
          {icon}
        </div>
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{description}</p>

        <div className="pt-6 space-y-4">
          <h3 className="text-xl font-bold text-white">What We Do:</h3>
          <ul className="space-y-3 text-gray-300">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className={`${accentColor} mt-1`}>→</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SpotlightCard>
  );
}
