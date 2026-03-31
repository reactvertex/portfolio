import SkillGraph from './Graph';
import HorizentalLine from '../../HorizentalLine';
import { skillList } from '../constant';
import { SkillsContainers, SkillsHeader } from './styleComponent';

const SKillsComponent = () => {
  
    return (
        <SkillsContainers className='mx-5' >
            <SkillsHeader className="text-uppercase pb-4 text-center ">MY SKILLS</SkillsHeader>
            <div className={`d-flex flex-wrap flex-start` }>
                {skillList.map(val => (
                    <SkillGraph val={val} />
                ))}
            </div>
            <HorizentalLine />
        </SkillsContainers>
    )
}
export default SKillsComponent;