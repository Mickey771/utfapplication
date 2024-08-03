import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { date: '8-10', value: 1 },
    { date: '8-11', value: 3 },
    { date: '8-12', value: 5 },
    { date: '8-13', value: 5 },
    { date: '8-14', value: 7 },
    { date: '8-15', value: 7 },
    { date: '8-16', value: 10 },
];

const Graph = () => {
    return (
        <ResponsiveContainer width="100%" height={500}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#cadeff" fillOpacity={0.3} />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default Graph