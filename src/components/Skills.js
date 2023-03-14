import Image from "next/image";
import SectionHeader from "./SectionHeader";
// import Botstrap from '../../public/logos/Bootstrap.png';
import C from '../../public/logos/C.png';
import html from '../../public/logos/html5.png';
import CSS from '../../public/logos/CSS3.png'
import nodejs from '../../public/logos/Nodejs.png';
import js from '../../public/logos/Javascript.png';
import typescript from '../../public/logos/Typescript.png'
import java from '../../public/logos/Java.png'
import express from '../../public/logos/Express.png';
import linux from '../../public/logos/Linux.png';
import mongodb from '../../public/logos/MongoDB.png'
import mysql from '../../public/logos/MySQL.png'
import react from '../../public/logos/React.png'
import github from '../../public/logos/GitHub.png'
import socketio from '../../public/logos/SocketIO.png';
import docker from '../../public/logos/Docker.png';
import graphql from '../../public/logos/GraphQL.png';
import nextjs from '../../public/logos/NextJS.png';
import tailwind from '../../public/logos/tailwind.png';
import rust from '../../public/logos/Rust.png'
import python from '../../public/logos/Python.png'

export default function Skils() {
  
  return (
    <section className="bg-white px-6">
      <div className="max-w-4xl mx-auto py-12">
        <SectionHeader title="Mis habilidades" href="#" />
        <div className="">
          <ul className="flex flex-row flex-wrap place-content-center">
            <li className="mx-4 my-4 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={js} alt="javascript" width={90}  height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={typescript} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={java} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={C} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={python} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={rust} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={nodejs} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={express} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={html} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={CSS} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={linux} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={github} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={mysql} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={mongodb} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={react} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={graphql} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={nextjs} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={socketio} width={90} alt="" height={90} className="rounded-md" />
            </li>
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={docker} width={90} alt="" height={90} className="rounded-md" />
            </li>    
            <li className="mx-4 my-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-200">
              <Image src={tailwind} width={90} alt="" height={90} className="rounded-md" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
