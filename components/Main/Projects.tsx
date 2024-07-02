import ProjectCard from "../Required/ProjectCard";

const Home: React.FC = () => {
  const projects = [
    {
      image: "https://img-c.udemycdn.com/course/750x422/4383266_d1bc.jpg",
      name: "Vserve",
      description:
        "This project is a backend service that provides authentication, database, storage, and other services. It is built using Node Js, Express Js, TypeScript, and MongoDB.And these fetures are acessed by frontend SDK (TypeScript). Inspired by Firebase.",
      tags: ["Node Js", "Express Js", "TypeScript", "MongoDB"],
      githubLink: "https://github.com/spidersnipero/Vserve.git",
    },
    {
      image: "https://miro.medium.com/v2/1*P2gHAsTA5KjEYDGj9f7V7A.png",
      name: "Unlimited Cloud with Discord Bot",
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
    // Add more projects here
  ];

  return (
    <div className=" mx-auto p-4">
      <h1 className="text-4xl  mb-4 flex justify-center">My Projects</h1>
      <div className="space-y-4 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
