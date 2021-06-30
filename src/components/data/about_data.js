import React from 'react';

import api from '../../assets/icons/api.svg'
import backend from '../../assets/icons/backend.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'


const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable Web Pages using frontend tools"
    },
    {
        icon: backend,
        title: "Backend  Development",
        about: "Proficient in MySQL, handling database, server, api",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API, have done projects using free api providers "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "Continuous learner by solving problems in HackerRank and Leetcode"
    },
    {
        icon: puzzle,
        title: "Responsive UI designer",
        about: "Designing web pages that adapt to changing screen sizes"
    },
]

export default skills;