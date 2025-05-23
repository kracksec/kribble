import { SideBar } from "../../../components/Bars/SideBar";
import { CommentsComponent } from "../../../components/User/Comments/CommentsComponent";
export const Comments = () => {
  return (
    <div className="flex justify-evenly">
      <div className="w-[16%] max-lg:hidden">
        <SideBar />
      </div>
      <div className="w-full lg:w-[34%]">
        <CommentsComponent />
      </div>
      <div className="w-[16%] max-lg:hidden"></div>
    </div>
  );
};
