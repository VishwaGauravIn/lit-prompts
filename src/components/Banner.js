export default function Banner() {
  return (
    <>
      <div className="h-8 sticky top-0 z-30">
        <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute w-full h-8 top-0 left-0 text-white text-xs sm:text-sm md:text-base ease-in-out transition-all">
          <a
            href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20%22Lit%20Prompts%22%20to%20discover%20the%20ultimate%20collection%20of%20top%20AI%20prompts%20for%20ChatGPT%2C%20Bard%2C%20and%20beyond.%20Unleash%20the%20full%20potential%20of%20AI-driven%20interactions.%0aTry%20Now%3A%20https://litprompts.itsvg.in%0aby%20@VishwaGauravIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here to Share us on Twitter 📣
          </a>
        </div>
      </div>
    </>
  );
}
