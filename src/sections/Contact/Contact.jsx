import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
    const [isim, setIsim] = useState("")
    const [email, setEmail] = useState("")
    const [mesaj, setMesaj] = useState("")

    const handleSubmit = () => {
        emailjs.send(
            'service_huyrk1g',
            'template_hldbvuj',
            {
                name: isim,
                email: email,
                message: mesaj
            },
            'diOdNkEHk0yM1_cMZ'
        )
            .then(() => console.log("BAŞARILI"))
            .catch((err) => console.log("HATA:", err))
    }

    return (
        <section className="bg-gray-800 py-20 px-8" id="contact">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Get In Touch</h2>
                <input placeholder="Your Name" className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 mb-4 outline-none focus:border focus:border-orange-500"
                    type="text" value={isim} onChange={e => setIsim(e.target.value)} />
                <input placeholder="Your Email" className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 mb-4 outline-none focus:border focus:border-orange-500"
                    type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <textarea placeholder="Your Message"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 mb-4 outline-none focus:border focus:border-orange-500"
                    rows={5}
                    value={mesaj}
                    onChange={e => setMesaj(e.target.value)}
                ></textarea>
                <button onClick={handleSubmit} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
                >Send Message</button>
            </div>
            <div>

            </div>
        </section>
    )
}

export default Contact