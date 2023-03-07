import { useMemo } from "react";
import "./App.css";
import Table from "./member";

import pjs from './박재석.png'
import pdy from './박도영.png'
import skd from './서강덕.png'
import ahb from './안해빈.jpg'
import sjw from './서지원.jpg'

function App() {
  const columns = useMemo(
    () => [
      {
        accessor: "image",
        Header: "Image"
      },
      {
        accessor: "name",
        Header: "Name"
      },
      {
        accessor: "dept",
        Header: "Department"
      },
      {
        accessor: "email",
        Header: "Email"
      },
      {
        accessor: "phone",
        Header: "Phone"
      },
      {
        accessor: "github",
        Header: "Github"
      },
    ],
    []
  );

  const data = [
    {
      'name': "　　　박도영　　　",
      'no': 201800000,
      'phone': '010-6633-3653　　　',
      'email': 'doodoo55@gachon.ac.kr　　　',
      'dept': 'AI·소프트웨어학부(소프트웨어전공)　　　',
      'github': 'https://github.com/Doyoung-Park',
      'image': <img src={pdy}/>
    },
    {
      'name': "　　　박재석　　　",
      'no': 201734919,
      'phone': '010-8612-8138　　　',
      'email': 'qkrwotjr0@gmail.com　　　', 
      'dept': '산업경영공학과', 
      'github': 'https://github.com/Jedo0224',
      'image': <img src={pjs}/>
    },
    {
      'name': "　　　서강덕　　　",
      'no': 201735979,
      'phone': '010-8731-2312　　　', 
      'email': 'rkdejr2321@naver.com　　　', 
      'dept': '컴퓨터공학과', 
      'github': 'https://github.com/rkdejr2321',
      'image': <img src={skd}/>
    },
    {
      'name': "　　　서지원　　　",
      'no': 201835465,
      'phone': '010-4725-8654　　　',
      'email': 'jwjw6410@gmail.com'　　　, 
      'dept': 'AI·소프트웨어학부(소프트웨어전공)　　　',
      'github': 'https://github.com/manips1',
      'image': <img src={sjw}/>
    },
    {
      'name': "　　　안해빈　　　",
      'no': 201835474,
      'phone': '010-9870-3043　　　',
      'email': 'gnh06280@naver.com'　　　,
      'dept': 'AI·소프트웨어학부(소프트웨어전공)　　　',
      'github': 'https://github.com/HaebinAHN',
      'image': <img src={ahb}/>
    },
  ];

  return <Table columns={columns} data={data} />;
}

export default App;