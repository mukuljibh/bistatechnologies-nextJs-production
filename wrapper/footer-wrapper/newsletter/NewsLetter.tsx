export default function NewsLetter() {
    return (
        <section className={`relative min-h-56 flex justify-center 'bg-gray-200 p-4'} `}>

            <video
                className=" w-full h-full "
                autoPlay
                muted
                loop
                width="1280"
                height="720"
            >
                <source src="/homepage/banner.webm" type="video/webm" />
            </video>

            <div className="md:absolute lg:top-20 top-10  text-center lg:p-5 p-2 lg:space-y-4 space-y-2 rounded-lg">
                <h2 className="text-slate-800 font-bold lg:text-3xl text-lg ">Subscribe to Bista Technologies Newsletter</h2>
                <p className="lg:text-lg text-slate-500 text-xs">
                    Be the first to learn about updates, new features, and other exciting news! <br />
                    Type in your email!
                </p>
                <div className="space-x-5 h-auto w-auto flex relative justify-end">
                    <input
                        className="outline-none p lg:border w-full text-xs pl-5 pr-36 lg:h-12 h-7 rounded-full"
                        type="email"
                        placeholder="enter your e-mail"
                        aria-label="Email address"
                    />
                    <button className="absolute bg-sky-700 hover:bg-purple-500 lg:w-32 rounded-full h-full text-white lg:text-sm transition-all duration-300 text-xs font-semibold lg:p-2 p-1">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>


    )
}   