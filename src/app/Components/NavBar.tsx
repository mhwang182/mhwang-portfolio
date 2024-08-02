const NavBar = () => {
    return (
        <div className="w-full h-24 bg-zinc-50 fixed top-0 bg-opacity-55 z-20 backdrop-blur-md">
            <div className="flex h-full justify-between px-10">
                <div className="flex items-center space-x-3">
                    <div className="bg-sky-600 rounded-full size-12"></div>
                    <span className="font-bold text-xl hover:text-sky-600 cursor-pointer">MATT HWANG</span>
                </div>

                <div className="flex items-center space-x-10">
                    <span className="font-bold text-l hover:text-sky-600 cursor-pointer">HOME</span>
                    <span className="font-bold text-l hover:text-sky-600 cursor-pointer">ABOUT</span>
                    <span className="font-bold text-l hover:text-sky-600 cursor-pointer">PROJECTS</span>
                    <span className="font-bold text-l hover:text-sky-600 cursor-pointer">CONTACT</span>
                </div>
            </div>
        </div>)
}

export default NavBar