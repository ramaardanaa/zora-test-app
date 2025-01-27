import TopicCard from "@/components/TopicCard";
import { EXPLORE_TOPICS_DUMMY_DATA } from "@/constants/courseDatas";

export default function ExploreTopics() {
  return (
    <section>
      <h2 className="text-sm font-semibold mt-10">EXPLORE TOPICS</h2>
      <div className="flex flex-col mt-10 gap-[20px]">
        {EXPLORE_TOPICS_DUMMY_DATA.map(({ id, title, viewCount }) => (
          <TopicCard key={id} title={title} viewCount={viewCount} />
        ))}
      </div>
    </section>
  )
}