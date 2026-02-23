import clsx from "clsx";
import svgPaths from "./svg-770u8gq0vg";
type IconVectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconVectorBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<IconVectorBackgroundImageProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5732 11.5732">
          {children}
        </svg>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white border-[#f0f0fa] border-[1.234px] border-solid overflow-clip relative rounded-[27.776px] shadow-[7px_9px_21.9px_0px_rgba(5,251,144,0.25)] size-full" data-name="Container">
      <div className="absolute h-[308.23px] left-[80.77px] top-[30.24px] w-[515.67px]">
        <p className="-translate-x-1/2 absolute bg-clip-text font-['Arial:Black',sans-serif] leading-[299.361px] left-[415.67px] not-italic text-[299.361px] text-center top-0" style={{ backgroundImage: "linear-gradient(-89.9558deg, rgb(5, 251, 144) 0%, rgb(185, 254, 224) 74.634%)", WebkitTextFillColor: "transparent" }}>
          1
        </p>
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-73.54px)] pt-[23.146px] px-[23.146px] rounded-[18.517px] size-[92.586px] top-[5.44px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.345deg, rgb(5, 251, 144) 10.515%, rgb(185, 254, 224) 100.16%)" }}>
          <div className="h-[46.293px] overflow-clip relative shrink-0 w-full" data-name="Icon">
            <IconVectorBackgroundImage additionalClassNames="inset-[12.5%_70.83%_70.83%_12.5%]">
              <path d={svgPaths.p919c600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.85775" />
            </IconVectorBackgroundImage>
            <IconVectorBackgroundImage additionalClassNames="inset-[12.5%_12.5%_70.83%_70.83%]">
              <path d={svgPaths.p3d790500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.85775" />
            </IconVectorBackgroundImage>
            <IconVectorBackgroundImage additionalClassNames="inset-[70.83%_12.5%_12.5%_70.83%]">
              <path d={svgPaths.p246b6e00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.85775" />
            </IconVectorBackgroundImage>
            <IconVectorBackgroundImage additionalClassNames="inset-[70.83%_70.83%_12.5%_12.5%]">
              <path d={svgPaths.p352b7480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.85775" />
            </IconVectorBackgroundImage>
          </div>
        </div>
        <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[23.146px] left-[calc(50%-73.33px)] not-italic text-[#05fb90] text-[16.203px] text-center top-[119.04px] tracking-[0.8101px] uppercase">
          <bdi dir="ltr">AI Analysis</bdi>
        </p>
        <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[32.405px] left-[calc(50%-73.9px)] not-italic text-[#0f172a] text-[23.146px] text-center top-[168.47px] w-[367.875px] whitespace-pre-wrap" dir="auto">
          מעלה את פסק הדין
        </p>
        <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[30.09px] left-[calc(50%-73.55px)] not-italic text-[#0f172a] text-[18.517px] text-center top-[217.23px] w-[342.568px] whitespace-pre-wrap" dir="auto">
          מעלה את המסמכים והמערכת מזהה בדיוק מה מגיע לך: הצמדה, מחצית הוצאות רפואיות, חוגים, קייטנות - הכל.
        </p>
      </div>
    </div>
  );
}
