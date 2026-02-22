type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={`relative shrink-0 ${additionalClassNames}`}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f0f0fa] content-stretch flex gap-[13.896px] h-[70px] items-center justify-end left-0 pr-[30px] rounded-[16.212px] top-0 w-[717.665px]" data-name="Container">
        <Wrapper additionalClassNames="h-[28px] w-[385px]">
          <p className="-translate-x-full absolute font-['Arial:Regular',sans-serif] leading-[27.793px] left-[385px] not-italic text-[#0f172a] text-[18.528px] text-right top-0" dir="auto">
            יש לי פסק דין / הסכם גירושין (לא חובה להעלות כרגע)
          </p>
        </Wrapper>
        <Wrapper additionalClassNames="size-[30px]">
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-white left-0 rounded-[6px] shadow-[0px_4px_10.7px_0px_rgba(0,0,0,0.25)] size-[30px] top-0" data-name="Container" />
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
