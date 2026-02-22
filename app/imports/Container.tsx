function Container1() {
  return <div className="absolute bg-[#05fb90] left-[287.98px] opacity-94 rounded-[41447216px] size-[9.264px] top-[23.16px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute h-[27.793px] left-[27.79px] top-[13.9px] w-[250.924px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[27.793px] left-[125.9px] not-italic text-[#05fb90] text-[18.528px] text-center top-[-2.24px]" dir="auto">
        המערכת החכמה לגביית מזונות
      </p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#0f172a] relative rounded-[41447216px] size-full" data-name="Container">
      <Container1 />
      <Text />
    </div>
  );
}