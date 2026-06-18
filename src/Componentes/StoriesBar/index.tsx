import "./storiesBar.css";
import type { Story } from "../../Types/story";

export default function StoriesBar() {
  const stories: Story[] = [ //datos hardcodeados
    { id: 1, user: "tu_usuario", image: "https://i.pravatar.cc/150?img=1" },
    { id: 2, user: "juan", image: "https://i.pravatar.cc/150?img=2" },
    { id: 3, user: "ana", image: "https://i.pravatar.cc/150?img=3" },
    { id: 4, user: "lucas", image: "https://i.pravatar.cc/150?img=4" },
    { id: 5, user: "maria", image: "https://i.pravatar.cc/150?img=5" },
    { id: 6, user: "pedro", image: "https://i.pravatar.cc/150?img=6" },
    { id: 7, user: "luis", image: "https://i.pravatar.cc/150?img=7" },
    { id: 8, user: "sofia", image: "https://i.pravatar.cc/150?img=8" },
    { id: 9, user: "diego", image: "https://i.pravatar.cc/150?img=9" },
    { id: 10, user: "carla", image: "https://i.pravatar.cc/150?img=10" },
  ];

  return (
    <div className="stories-bar">
      {stories.map((story) => ( /* mapea cada historia en divs */
        <div key={story.id} className="story">
          <div className="story-ring">
            <img src={story.image} alt={story.user} />
          </div>
          <span>{story.user}</span>
        </div>
      ))}
    </div>
  );
}