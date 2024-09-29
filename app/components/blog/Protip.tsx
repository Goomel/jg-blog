import PenIcon from '@/public/icons/pen-new-square.svg';
const Protip = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="my-3 flex items-center gap-2 rounded-md border border-gray-400 bg-[#282c34] p-4 lg:my-5 lg:gap-3 lg:rounded-lg lg:p-5">
      <div className="size-5 [&>svg]:size-full">
        <PenIcon />
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Protip;
