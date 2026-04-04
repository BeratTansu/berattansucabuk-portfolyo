function NavIcon({ href, icon }) {
    const Icon = icon
    return (
        <a href={href} className="text-gray-300 hover:text-orange-400">
            <Icon size={20} />
        </a>
    )
}

export default NavIcon