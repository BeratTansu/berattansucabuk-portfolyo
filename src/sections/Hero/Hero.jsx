import profilePhoto from '../../assets/profilePhoto.jpeg'

function Hero() {
    return (
        <div className="hero bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="flex items-center gap-16">
                <div>
                    <h1 className="text-6xl font-bold mb-4">Berat Tansu Çabuk</h1>
                    <h2 className="text-2xl text-orange-400 mb-3">Backend Developer & Software Engineer</h2>
                    <p className="text-gray-400 mb-8">Backend Developer who picks the hard problems on purpose.</p>
                    <div className="hero-buttons flex gap-4">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">See My Projects</button>
                        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold">Get In Touch</button>
                    </div>
                </div>
                <div>
                    <img
                        src={profilePhoto}
                        alt="Berat Tansu Çabuk"
                        className="w-72 h-72 rounded-full object-cover object-top"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero