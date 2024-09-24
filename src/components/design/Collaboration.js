import brainwaveSymbol from "./assets/Collaboration/brainwave-symbol.svg";
import check from "./assets/Collaboration/check.svg";
import { collabApps, collabContent, collabText } from "./assets/Collaboration/Collaboration";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from './assets/Collaboration/Collaboration';

const Collaboration = () => {
  return (
    <div className="overflow-x-hidden">
      <Section crosses>
        <div className="container mx-auto lg:flex lg:items-center lg:justify-between py-12">
          
          {/* Left Section with Text and Button */}
          <div className="lg:max-w-lg">
            <h2 className="h2 mb-4 md:mb-8">
              AI Chat App for seamless collaboration
            </h2>

            <ul className="space-y-4 mb-8 md:mb-12">
              {collabContent.map((item) => (
                <li className="flex items-center space-x-4" key={item.id}>
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 text-xl text-grey">{item.title}</h6>
                </li>
              ))}
            </ul>

            <p className="body-2 text-n-4 mb-6 lg:w-[20rem]">
              {collabText}
            </p>

            {/* Original Button Colors */}
            <Button
              href="/register"
              className="inline-block px-8 py-3 rounded-full bg-n-6 text-n-1 font-semibold shadow-lg transition-transform transform hover:scale-105 hover:text-n-1 hover:shadow-xl"
            >
              Try it Now
            </Button>
          </div>

          {/* Right Section with Circular Design */}
          <div className="mt-12 lg:mt-0 lg:ml-auto relative w-full flex justify-center">
            <div className="relative w-[18rem] md:w-[24rem] aspect-square border border-n-6 rounded-full flex items-center justify-center scale-75 md:scale-100">

              {/* Inner Circle with Original Colors */}
              <div className="w-36 md:w-48 aspect-square bg-n-8 rounded-full flex items-center justify-center">
                <div className="w-16 md:w-20 h-16 md:h-20 bg-conic-gradient rounded-full flex items-center justify-center">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <img
                      src={brainwaveSymbol}
                      width={48}
                      height={48}
                      alt="brainwave"
                    />
                  </div>
                </div>
              </div>

              {/* Rotating Apps Around the Circle */}
              <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                    style={{
                      transform: `rotate(${index * 45}deg) translateY(1.5rem)`,
                    }}
                  >
                    <div
                      className="relative -top-[3rem] w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl shadow-lg flex items-center justify-center"
                      style={{
                        transform: `rotate(-${index * 45}deg)`,
                      }}
                    >
                      <img
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Collaboration;
