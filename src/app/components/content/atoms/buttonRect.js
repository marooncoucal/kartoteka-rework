import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight } from "../icons";

export default function ButtonRect({link, text, arrowLeft = false, arrowRight = false, arrowDown = false}) {
  return (
      <Link href={link ?? "#"} passHref className="ButtonRect flex flex-col gap-[16px] 690w:flex-row 690w:justify-between">
        <div className={`flex items-center justify-center gap-[4px] pb-[2px] h-[30px] px-[16px] max-w-[120px] mt-[-1px] border-solid border-black border-[1px] bg-custom-white select-none`}>
          {arrowLeft ? <ArrowLeft /> : null}
          <div className="Text text-[16px] leading-none whitespace-nowrap">
            {text}
          </div>
          {arrowRight ? <ArrowRight /> : null}
          {arrowDown ? <ArrowDown /> : null}
        </div>
      </Link>
  );
}
