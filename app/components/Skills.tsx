import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div className="flex flex-col justify-center py-10">
      <div className="font-bold font-['Raleway'] leading-9 text-[var(--primary-2)] text-center">
        SKILLS
      </div>
      <div className="text-center">Front End</div>
      <div className="flex flex-wrap justify-center gap-2">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <div className="text-center">Back End</div>
      <div className="flex flex-wrap justify-center gap-2">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <div className="text-center">Others</div>
      <div className="flex flex-wrap justify-center gap-2">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
}

export default Skills;
