import Image from "next/image";
import Button from "./Button"; 
function HeroSection(){
    return <div className="flex flex-col-reverse md:flex-row h-[var(--hero-section)] px-10 md:px-20 py-10 md:py-14 gap-10">
        <div className="md:flex-1">
    <div className="flex  flex-col justify-end h-full pb-[55px] md:py-[55px] font-(family-name:--font-raleway) ">
            <h2 className="text-3xl font-semibold">Hello, I&apos;m</h2>
            <h1 className="text-4xl font-bold">Vimal <span className="text-[var(--primary-2)]">Raj V</span> </h1>
            <h6 className="text-base font-semibold">Front-End Developer specializing in React.js, Tailwind CSS & GitHub Actions. Crafting seamless UI experiences with scalable solutions.</h6>
            <div className="flex flex-row gap-3 ">
                <Button isPrimary className="max-w-[166px] w-full" iconName={"person.svg"}>About Me</Button >
                <Button isOutLine className="max-w-[166px] w-full" iconName={"Eye.svg"}>Projects</Button >
            </div>
            <div className="flex px-[10px] pt-[10px] pb-[15px] gap-[25px]">
            <Image src={"githu.svg"} alt="github" width="30" height={30}/>     <Image height={30} src={"linkedin.svg"} alt="linked in"  width="30"/>     <Image height={30} width="40" alt="mail" src={"mail.svg"}/>
            </div>
        </div>
        </div>
        <div className="md:flex-1 flex justify-center md:pb-[55px]">
            <div className="flex width-80 height-full justify-center items-end relative">
            <Image className="w-full max-h-full" src="circlebackground.svg" alt="" width={432} height={490}/>
            <Image className="absolute max-h-full" src="vimal.svg" alt="" width={494} height={494}/>
            </div>
        </div>

    </div>
}
export default HeroSection;