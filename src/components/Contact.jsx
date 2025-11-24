import React, { use } from "react";
import { openingHours, socials } from "../../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeLine
      .from(titleSplit.words, {
        opacity: 0,

        yPercent: 100,
        stagger: 0.03,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", { y: -50, ease: "power1.inOut", duration: 1 })
      .to("#f-left-leaf", { y: -50, ease: "power1.inOut", duration: 1 }, "<");
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-Leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-Leaf"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to find us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p> Kambo, Nyalla Pariso, Douala, 5 Story Building House</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(+237) 658-538-657</p>
          <p>sopbweaudrey@gmail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.id} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
