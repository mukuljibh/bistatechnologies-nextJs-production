import LeaderAchievement from './LeaderAchievement';
import LeadersCard from './LeadersCard';
export default function OurLeaders() {
    return (
        <div >
            <div className="space-y-10 lg:mb-16">
                <img className="w-full " src="/about-us/our-leaders/1.jpg" />
            </div>
            <LeaderAchievement />
            <LeadersCard />
        </div>
    );
}
