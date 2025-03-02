import discord from "./pics/discord.png";
import figma from "./pics/figma.png";
import framer from "./pics/framer.png";
import notion from "./pics/notion.png";
import photoshop from "./pics/photoshop.png";
import protopie from "./pics/protopie.png";
import raindrop from "./pics/raindrop.png";
import slack from "./pics/slack.png";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <svg width="162" height="76" viewBox="0 0 162 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.333333 3C0.333333 1.52724 1.52724 0.333336 3 0.333336C4.47276 0.333336 5.66667 1.52724 5.66667 3C5.66667 4.47276 4.47276 5.66666 3 5.66666C1.52724 5.66666 0.333333 4.47276 0.333333 3ZM157 72.5L162 70.1132V75.8868L157 73.5V72.5ZM84.5606 38C84.5606 36.5272 85.7545 35.3333 87.2272 35.3333C88.7 35.3333 89.8939 36.5272 89.8939 38C89.8939 39.4728 88.7 40.6667 87.2272 40.6667C85.7545 40.6667 84.5606 39.4728 84.5606 38ZM3 2.5H52.2273V3.5H3V2.5ZM122.227 72.5H157.5V73.5H122.227V72.5ZM87.7272 38C87.7272 57.0538 103.173 72.5 122.227 72.5V73.5C102.621 73.5 86.7272 57.6061 86.7272 38H87.7272ZM52.2273 2.5C71.8334 2.5 87.7272 18.3939 87.7272 38H86.7272C86.7272 18.9462 71.2811 3.5 52.2273 3.5V2.5Z" fill="#252134"/>
      </svg>
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <svg width="522" height="182" viewBox="0 0 522 182" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.333333 179C0.333333 180.473 1.52724 181.667 3 181.667C4.47276 181.667 5.66667 180.473 5.66667 179C5.66667 177.527 4.47276 176.333 3 176.333C1.52724 176.333 0.333333 177.527 0.333333 179ZM517 3.5L522 5.88675V0.113249L517 2.5V3.5ZM3 179.5H131.782V178.5H3V179.5ZM212.282 99V83H211.282V99H212.282ZM291.782 3.5H517.5V2.5H291.782V3.5ZM212.282 83C212.282 39.0934 247.875 3.5 291.782 3.5V2.5C247.323 2.5 211.282 38.5411 211.282 83H212.282ZM131.782 179.5C176.241 179.5 212.282 143.459 212.282 99H211.282C211.282 142.907 175.688 178.5 131.782 178.5V179.5Z" fill="#252134"/>
      </svg>
    </div>
  );
};

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];
