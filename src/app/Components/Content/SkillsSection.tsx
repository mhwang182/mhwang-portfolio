const SkillsSection = () => {

    const skills = [
        "Java", "Javascript", "Typescript", "SpringBoot",
        "ReactJS", "NextJS", "NodeJS", "AWS", "SQL",
        "Hibernate", "MongoDB", "Python", "Flask",
        "Docker", "Agile/Scrum", "Cross Team Collaboration"
    ]

    return (
        <div className="
            w-full md:max-w-96
            border border-gray-300 rounded-lg shadow-md p-4 bg-white 
        ">
            <span className="font-bold text-2xl">Skills:</span>
            <div className="flex flex-wrap gap-y-2 gap-x-2 mt-3 overflow-y-scroll md:max-h-80">
                {skills.map((skill, index) =>
                    <div key={index} className="px-4 py-2 bg-gray-200 font-semibold rounded-sm text-gray-500">{skill}</div>
                )}
            </div>
        </div>
    )
}

export default SkillsSection