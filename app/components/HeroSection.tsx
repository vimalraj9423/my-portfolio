import Button from "./Button"; 
function HeroSection(){
    return <div className="flex col h-[var(--hero-section)] px-20">
        <div className="flex-1">
    <div className="flex  flex-col justify-end h-full py-[55px] font-(family-name:--font-raleway) ">
            <h2 className="text-3xl font-semibold">Hello, I&apos;m</h2>
            <h1 className="text-4xl font-bold">Vimal <span className="text-[var(--primary-2)]">Raj V</span> </h1>
            <h6 className="text-base font-semibold">Front-End Developer specializing in React.js, Tailwind CSS & GitHub Actions. Crafting seamless UI experiences with scalable solutions.</h6>
            <div className="flex flex-row gap-3 ">
                <Button isPrimary className="max-w-[166px] w-full" iconName={"person.svg"}>About Me</Button >
                <Button isOutLine className="max-w-[166px] w-full" iconName={"Eye.svg"}>Projects</Button >
            </div>
        </div>
        </div>
        <div className="1"></div>

    </div>
}
export default HeroSection;