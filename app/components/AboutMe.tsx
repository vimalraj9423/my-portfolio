import ServiceCard from "./ServiceCard";

function AboutMe() {
  return (
    <div className=" px-10 md:px-20 py-5 flex flex-col justify-start items-start gap-3.5 overflow-hidden">
      <div className="justify-start text-[var(--primary-2)] text-2xl font-bold font-['Inter'] leading-9">
        About me:
      </div>
      <p className="text-xl font-medium font-['Raleway'] leading-7 tracking-wide">
        I am a Front-End Developer specializing in building high-performance,
        scalable web applications using React.js, Tailwind CSS, and GitHub
        Actions. With experience in Node.js, Spring Boot, and Docker, I develop
        efficient backend solutions and streamline deployments with modern cloud
        technologies like AWS ECS, EC2, and S3 Parameter Store. Passionate about
        optimizing workflows, automation, and UI/UX, I focus on delivering
        seamless digital experiences.
      </p>
      <div className="flex flex-row">
        <div className=" text-7xl font-bold font-['Poppins']tracking-wide text-[var(--primary-2)]">
          5+
        </div>
        <div className="flex-1 max-w-[732px]">
          Years of Experience Experienced in frontend-backend integration,
          cloud-based deployments, and containerized solutions, ensuring
          high-quality, scalable applications. Passionate about performance
          optimization, automation, and building efficient development
          workflows.
        </div>
      </div>
      <div className="text-2xl font-medium font-['Poppins'] text-[var(--primary-2)]">
        The services i offer:
      </div>
      <div className="grid md:grid-cols-4   lg:grid-cols-5 w-full gap-4">
        <ServiceCard iconName="browsericon.svg">
          WEB
          <br />
          DEVELOPMENT
        </ServiceCard>
        <ServiceCard iconName="browsericon.svg">
          API <br />
          DEVELOPMENT
        </ServiceCard>
        <ServiceCard iconName="browsericon.svg">
          MOBILE APPS
          <br />
          DEVELOPMENT
        </ServiceCard>
        <ServiceCard iconName="browsericon.svg">
          PIPELINE
          <br />
          SETUP
        </ServiceCard>
        <ServiceCard iconName="browsericon.svg">
          IT
          <br />
          CONSULTIING
        </ServiceCard>
      </div>
    </div>
  );
}

export default AboutMe;
