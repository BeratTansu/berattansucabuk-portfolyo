import NavIcon from '../ui/NavIcon'
import { GitBranch, Link  } from 'lucide-react'

function Navbar() {
    return (
        <nav className="navbar fixed top-0 w-full bg-gray-900 border-b border-orange-500/20 px-8 py-4 flex justify-between items-center z-50">
            <div className="text-orange-400 font-bold text-xl">
                <h1>BTC</h1>
            </div>
            <div className="flex items-center gap-6">
                <a href="#projects" className="text-gray-300 hover:text-orange-400">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-orange-400">Contact</a>
                <NavIcon href="github-linkin-buraya" icon={GitBranch} />
                <NavIcon href="linkedin-linkin-buraya" icon={Link} />
            </div>
        </nav>
    )
}

export default Navbar