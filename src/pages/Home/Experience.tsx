import Topbar from "../../component/Topbar"
import './Experience.scss'
import { useState } from "react"
import * as MdIcons from "react-icons/md";
import experience_json from "../../assets/experience.json"

const Experience = () => {
    const [t_index, setT_index] = useState(0)

    const lastExperience = () => {
        const a = t_index - 1
        if (a < 0) {
            setT_index(experience_json.length - 1)
        } else {
            setT_index(a)
        }
    }

    const nextExperience = () => {
        const a = t_index + 1
        if (a > 2) {
            setT_index(0)
        } else {
            setT_index(a)
        }
    }

    // function timeout(delay: number) {
    //     return new Promise((res) => setTimeout(res, delay));
    // }

    // async function changeJob() {
    //     await timeout(4000)
    //     if (t_index === 0) setT_index(1)
    //     else if (t_index === 1) setT_index(2)
    //     else if (t_index === 2) setT_index(0)
    // }
    
    // useEffect(() => {
    //     changeJob()
    // }, [t_index])

    return (
        <div id="about" className="experience">
            <Topbar />
        
            <div className="experience-container">
                <div className="experience-texts">
                    <div className="arrows">
                        <MdIcons.MdKeyboardArrowUp onClick={lastExperience} className="icon-up"/>
                        <MdIcons.MdKeyboardArrowDown onClick={nextExperience} className="icon-down"/>
                    </div>

                    <div className="experience-shape-container">
                        <div className="title-circle" />
                        <div className="experience-line" />
                        <div className="arrows-phone">
                        </div>
                    </div>

                    <div className="experience-content">
                        <h3>{experience_json[t_index]["title"]}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis amet ut, odit corrupti possimus rerum pariatur necessitatibus eaque expedita ea eius nam sunt laborum id quis fugiat aperiam minima.</p>
                        <MdIcons.MdKeyboardArrowLeft onClick={lastExperience} className="icon-left"/>
                        <MdIcons.MdKeyboardArrowRight onClick={nextExperience} className="icon-right"/>
                    </div>
                </div>
                <img className="experience-img" src={experience_json[t_index]["image"]} alt={experience_json[t_index]["title"]}/>
                <h3 className="zone-title text-verticle">EXPERIENCE</h3>
            </div>
            <div style={{width: '100%', zIndex: 1, position: 'relative', display: 'flex', justifyContent: 'flex-end', bottom: '25%'}}>
            <div className='circle4'></div>
            </div>
        </div>
    )
}

export default Experience