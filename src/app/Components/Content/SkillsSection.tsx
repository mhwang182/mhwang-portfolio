const SkillsSection = () => {
    return (
        <div className="w-full sm:max-w-96 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
            <span className="font-bold text-2xl">Skills:</span>
            <div className="flex flex-wrap gap-y-2 gap-x-2">
                <div className="px-4 py-2 bg-gray-200 font-semibold rounded-sm text-gray-500">HTML</div>
                <div className="px-4 py-2 bg-gray-200 font-semibold rounded-sm text-gray-500">Javascript</div>
                <div className="px-4 py-2 bg-gray-200 font-semibold rounded-sm text-gray-500">Typescript</div>
                <div className="px-4 py-2 bg-gray-200 font-semibold rounded-sm text-gray-500">SpringBoot</div>
            </div>
        </div>
    )
}

export default SkillsSection