import Image from "next/image";
export default function Header(){return <header className="header"><a className="brand" href="#home"><Image src="/babi-elephant.png" alt="BABI elephant" width={52} height={42}/><span className="brand-rule"/><span><b>BABI</b><small>GROWTH MARKETING</small></span></a><nav><a href="#about">About</a><a href="#services">Services</a><a href="#process">How We Work</a><a href="#work">Our Work</a><a href="#contact">Contact</a></nav><a className="pill dark" href="#contact">Let&apos;s Talk <span>↗</span></a></header>}

