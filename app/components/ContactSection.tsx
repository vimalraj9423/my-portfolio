import Button from "./Button";
import Input from "./Input";

function ContactSection() {
  return (
    <div className="px-10 md:px-20 py-5 md:py-10 flex flex-col md:flex-row">
      <div className="flex-1">
        <h5 className="text-2xl">Connect with me:</h5>
        <h6 className="tet-xl">Satisfied with me? Please contact me</h6>
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-white text-base font-semibold font-['Raleway']">
          Contact me. Lets make magic together
        </h3>
        <div className="flex-1 flex flex-col gap-3 items-start ">
          <Input placeHolder="Name" />
          <Input placeHolder="Email" />
          <Input placeHolder="Email" isTextArea />
          <Button isPrimary iconName={"person.svg"}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ContactSection;
