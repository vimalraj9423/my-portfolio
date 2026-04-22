export default function LetsConnects() {
  return (
    <div className="bg-[#FFFDFC]">
      <div className="max-w-[1440px] mx-auto  px-9  ">
        <div className="flex mx-auto transform p-[88px] pt-[100px] rounded-lg drop-shadow-[0_59px_124px_rgba(0,0,0,0.2)] bg-white translate-y-[100px] gap-[126px]">
          <div className="flex-1 flex flex-col gap-9">
            <div>
              <h1>Let’s discuss your Project</h1>
              <p>
                There are many variations of passages of Lorem Ipsu available.
                but the majority have suffered alte.
              </p>
            </div>
            <div>
              <div className="flex ">
                <div className=""></div>
                <div className="flex-1">
                  <div>Address</div>
                  <div>Suthamalli, tirunelveli</div>
                </div>
              </div>
              <div className="flex ">
                <div className=""></div>
                <div className="flex-1">
                  <div>Address</div>
                  <div>Suthamalli, tirunelveli</div>
                </div>
              </div>{" "}
              <div className="flex ">
                <div className=""></div>
                <div className="flex-1">
                  <div>Address</div>
                  <div>Suthamalli, tirunelveli</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[50px]">
            <p>
              There are many variations of passages of Lorem Ipsu available, but
              the majority have suffered alte.
            </p>
            <form>
              <div className="max-w-sm">
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1"
                ></label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b-2 border-slate-200 py-2 outline-none transition-colors duration-300 focus:border-[#2B384C] placeholder:text-slate-300 text-slate-800"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
