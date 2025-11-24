import React, { useRef } from "react";
import gsap from "gsap";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const navRef = useRef(null);
  useGSAP(() => {
    // OLD WAY
    // const navTween = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "nav",
    //     start: "bottom top", // when the bottom of the nav-bar will reach the top of the viewport
    //   },
    // });

    gsap.fromTo(
      navRef.current,
      {
        backdropFilter: "blur(0px)",
        backgroundColor: "transparent",
      },
      {
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0,0,0,0.3)",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "400 top", // amount of scroll before full blur
          scrub: true, // smooth scroll → animation goes forward + backward
        },
      }
    );
  });
  return (
    <nav ref={navRef}>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Tequila</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
