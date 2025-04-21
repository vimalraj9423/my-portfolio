import Image from "next/image";
import Button from "./Button";
import Header from "./Header";
function HeroSection() {
  return (
    <div className="bg-linear-[310deg,var(--color-hero-from),var(--color-hero-to)] dark:bg-linear-[167deg,var(--color-hero-from),var(--color-hero-to)] ">
      <Header />
      <div className="flex flex-col-reverse md:flex-row h-screen px-10 md:px-20 py-10 md:py-14 gap-10">
        <div className="md:flex-1">
          <div className="flex  flex-col justify-end h-full md:py-[55px] font-(family-name:--font-raleway) gap-1">
            <section className="flex items-center justify-center   px-6">
              <div className="max-w-4xl text-center">
                <h1 className="text-5xl font-extrabold leading-tight  text-gray-300   dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 dark:text-transparent bg-clip-text md:text-7xl fade-in ">
                  &quot;Your biggest dreams start with the smallest steps.&quot;
                </h1>
                {/* <p className="mt-6 text-lg text-gray-600 md:text-xl">
                  Believe, act, and make it happen.
                </p> */}
              </div>
            </section>
            <h2 className="text-3xl font-semibold text-white">
              Hello, I&apos;m
            </h2>
            <h1 className="text-4xl font-bold text-white ">
              Vimal{" "}
              <span className="text-[var(--name-height-light)]">Raj V</span>{" "}
            </h1>
            <h6 className="text-base font-medium text-white  pb-[2px] ">
              Front-End Developer specializing in React.js, Tailwind CSS &
              GitHub Actions. Crafting seamless UI experiences with scalable
              solutions.
            </h6>

            <div className="flex flex-row gap-3 ">
              <Button
                isPrimary
                className="max-w-[166px] w-full leading-tight bg-linear-[350deg,var(--color-button-from),var(--color-button-to)]"
                iconName={"person.svg"}
              >
                About Me
              </Button>
              <Button
                isOutLine
                className="max-w-[166px] w-full leading-tight"
                iconName={"Eye.svg"}
              >
                Projects
              </Button>
            </div>

            <div className="flex px-[10px] pt-[10px] pb-[15px] gap-[25px]">
              <Image src={"githu.svg"} alt="github" width="30" height={30} />{" "}
              <Image
                height={30}
                src={"linkedin.svg"}
                alt="linked in"
                width="30"
              />{" "}
              <Image height={30} width="40" alt="mail" src={"mail.svg"} />
            </div>
          </div>
        </div>
        <div className="md:flex-1 flex justify-center md:pb-[55px]">
          <div className="flex width-80 height-full justify-center items-end relative">
            <Image
              className="w-full max-h-full rounded-full bg-[var(--circle-background)]"
              src="circlebackground.svg"
              alt=""
              width={432}
              height={490}
            />
            <Image
              className="absolute max-h-full"
              src="/vimal-update.png"
              alt=""
              width={494}
              height={494}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
