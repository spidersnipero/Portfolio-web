import ProjectCard from "../Required/ProjectCard";

const Home: React.FC = () => {
  const projects = [
    {
      image: "https://img-c.udemycdn.com/course/750x422/4383266_d1bc.jpg",
      name: "Vserve",
      description:
        "This project is a backend service that provides authentication, database, storage, and other services. It is built using Node Js, Express Js, TypeScript, and MongoDB. And these features are accessed by frontend SDK (TypeScript). Inspired by Firebase.",
      tags: ["Node Js", "Express Js", "TypeScript", "MongoDB"],
      githubLink: "https://github.com/spidersnipero/Vserve.git",
    },
    {
      image: "https://miro.medium.com/v2/1*P2gHAsTA5KjEYDGj9f7V7A.png",
      name: "Unlimited Cloud With Discord Bot",
      description:
        "This project is a discord bot that provides unlimited cloud storage for discord users. It is built using Node Js, Discord Js. It is a fun project that I built to learn more about discord bots and cloud storage.",
      tags: ["React", "Node Js", "Discord Js", "Multer"],
      githubLink: "https://github.com/yourusername/project-two",
      mediumLink:
        "https://medium.com/@ajaykota2003/unlimited-cloud-with-discord-bot-19eb15de9cef",
    },
    {
      image: "./webRTC.png",
      name: "WebRTC Video Chat App",
      description:
        " This project is a video chat application that uses WebRTC for peer-to-peer communication. It is built using React Js, WebRTC, and SupaBase. It is a fun project that I built to learn more about WebRTC. This was inspired by Fireship video on WebTRC in 100s.",
      tags: ["React", "WebTRC", "Javascript", "SupaBase", "Data Modeling"],
      githubLink: "https://github.com/spidersnipero/webRTC-Supabase.git",
    },
    {
      image: "./quotes.png",
      name: "A Daily Quote Sharing Web App",
      description:
        "A full stack social media web app that is used to share quotes to all friends daily. This was inspired by an Instagram reel where a person, at random, asks others to tell the 'quote of the day'.",
      tags: ["React", "Firebase", "Javascript", "Firebase Hosting"],
      githubLink: "https://github.com/spidersnipero/webRTC-Supabase.git",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        My Projects
      </h1>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
