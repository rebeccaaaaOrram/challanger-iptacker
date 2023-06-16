interface Props {
  title: string;
  content: string;
}

export function Card({ content, title }: Props) {
  return (
    <div className="flex flex-col gap-2 relative max-sm:border-b-[2px] max-sm:pb-8 max-sm:w-[100%]">
      <h2 className="uppercase text-xs text-[#969696]">{title}</h2>
      <p className="text-[25px]">{content}</p>
      <div className="max-sm:hidden absolute top-0 right-[-65px] bottom-0 w-[0.5px] bg-[#cecdcd]"></div>
    </div>
  );
}
