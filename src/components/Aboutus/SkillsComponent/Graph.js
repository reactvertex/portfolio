import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import {SkillGraph,Skilllabel} from './styleComponent';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];
const COLORS = ['#ffb400', '#111'];

const Graph = ({val}) => {

  return (
    <SkillGraph className='d-flex flex-column align-items-center py-5 '>
      <PieChart width={260} height={200} >
        <Pie
          data={val.data}
          cx={130}
          cy={80}
          innerRadius={55}
          outerRadius={70}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            width={30}
            position="center"
            className='lableValue'
          >
            30%
          </Label>
        </Pie>
      </PieChart>
      <Skilllabel>{val.skillName}</Skilllabel>
    </SkillGraph>
  );
}
export default Graph;