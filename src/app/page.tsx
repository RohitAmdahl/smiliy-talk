import Image from "next/image";
import giffile from "../../public/smiliy.gif";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto container">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-lg md:text-xl lg:text-4xl font-bold">
            Say Hello to Interactive Conversations with Smiliy-Talk!
          </h1>
          <p className="text-lg font-serif p-6">
            Welcome to Smiliy-Talk, where your conversations come to life!
            Engage in real-time, voice-driven dialogues with AI-powered avatars
            that listen, understand, and respond just like a real friend.
            Experience the future of interaction with Smiliy-Talk, where every
            chat is a smiling face away.
          </p>
        </div>
        <div className="flex justify-center items-center p-2">
          <div title="This is a smiliy GIF created with Gif maker, a random picture collection. All pictures taken from unsplash.com, but inbetween there is my own Avatar try to find it.">
            <Image
              src={giffile}
              alt="smiliy"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
