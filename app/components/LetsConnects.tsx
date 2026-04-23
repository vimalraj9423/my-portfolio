import FbIcon from "../icons/FbIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import LocationIcon from "../icons/LocationIcon";
import Button from "./Button";
import Input from "./Input";

const Address = ({
  title = "Address",
  address = "Suthamalli, tirunelveli",
  isDefault = false,
}: {
  title?: string;
  address?: string;
  isDefault?: boolean;
}) => {
  return (
    <div
      className={`flex p-6 drop-shadow-[0_12px_64px_rgba(28,25,25,0.12)] rounded-lg ${
        isDefault
          ? `group-hover:bg-transparent hover:!bg-white bg-white`
          : `hover:bg-white`
      } gap-[13px] group/item`}
    >
      <div className="">
        <div
          className={`
            
            ${
              isDefault
                ? `bg-[var(--color-primary)] group-hover:bg-[var(--light-primay-background)] group-hover/item:!bg-[var(--color-primary)]
                  text-white group-hover:text-[var(--color-primary)] group-hover/item:!text-white`
                : `bg-[var(--light-primay-background)] group-hover/item:bg-[var(--color-primary)]
                  text-[var(--color-primary)] group-hover/item:text-white`
            }
            p-4 rounded-md   transition duration-300`}
        >
          <LocationIcon />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-base text-[var(--gray-700)]">{title}</div>
        <div>{address}</div>
      </div>
    </div>
  );
};

export default function LetsConnects() {
  return (
    <div className="bg-[#FFFDFC]">
      <div className="max-w-[1440px] mx-auto  px-9  ">
        <div className="flex flex-col md:flex-row mx-auto transform p-6 md:p-[88px] md:pt-[100px] rounded-lg drop-shadow-[0_59px_124px_rgba(0,0,0,0.2)] bg-white translate-y-[100px] gap-[126px]">
          <div className="flex-1 flex  flex-col gap-9">
            <div className="flex flex-col gap-4">
              <h1 className="heading2 ">Let’s discuss your Project</h1>
              <p className="paragraph">
                There are many variations of passages of Lorem Ipsu available.
                but the majority have suffered alte.
              </p>
            </div>
            <div className="group">
              <Address
                title="Address:"
                address="Suthamalli, tirunelveli"
                isDefault
              />
              <Address title="My Email:" address="vimalrajvelraj@gmail.com" />
              <Address title="Call Me Now:" address="+91 9976327676" />
            </div>
            <div className="flex">
              <div className="flex gap-3 group">
                <div
                  className="group/item p-[15px] rounded-md bg-[var(--color-primary)] transition duration-300 drop-shadow-[0_59px_124px_rgba(0,0,0,0.2)]
    group-hover:bg-transparent hover:!bg-[var(--color-primary)]"
                >
                  <FbIcon
                    className="w-[18px] h-[18px] transition duration-300
      text-white group-hover:text-[var(--color-primary)] group-hover/item:!text-white"
                  />
                </div>
                <div
                  className="group/item p-[15px] rounded-md bg-transparent transition duration-300 drop-shadow-[0_59px_124px_rgba(0,0,0,0.2)]
    hover:bg-[var(--color-primary)]"
                >
                  <GithubIcon
                    className="w-[16px] h-[16px] transition duration-300
      text-[var(--color-primary)] group-hover/item:text-white"
                  />
                </div>
                <div
                  className="group/item p-[15px] rounded-md bg-transparent transition duration-300 drop-shadow-[0_59px_124px_rgba(0,0,0,0.2)]
    hover:bg-[var(--color-primary)]"
                >
                  <LinkedInIcon
                    className="w-[16px] h-[16px] transition duration-300
      text-[var(--color-primary)] group-hover/item:text-white"
                  />
                </div>
                <div
                  className="group/item p-[15px] rounded-md bg-transparent transition duration-300 drop-shadow-[0_59px_124px_rgba(0,0,0,0.2)]
    hover:bg-[var(--color-primary)]"
                >
                  <InstagramIcon
                    className="w-[16px] h-[16px] transition duration-300
      text-[var(--color-primary)] group-hover/item:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[50px]">
            <p className="paragraph">
              There are many variations of passages of Lorem Ipsu available, but
              the majority have suffered alte.
            </p>
            <form className="flex flex-col gap-6">
              <div className="max-w-sm">
                <Input id="name" placeholder="Name *" name="name" />
              </div>
              <div className="max-w-sm">
                <Input id="email" placeholder="Email *" name="email" />
              </div>
              <div className="max-w-sm">
                <Input id="location" placeholder="Location" name="location" />
              </div>
              <div className="max-w-sm">
                <Input id="subject" placeholder="Subject" name="subject" />
              </div>
              <div className="max-w-sm">
                <Input id="message" placeholder="Message" name="message" />
              </div>
            </form>
            <div>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
