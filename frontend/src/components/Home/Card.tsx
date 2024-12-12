import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import person from "../../assets/person.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CardProps = {
  title: string;
  location: string;
  image: string;
  contact: string;
};
const Card: React.FC<CardProps> = ({ title, location, image, contact }) => {
  return (
    <div className="bg-white rounded-lg md:p-[2%] w-[100%] mt-[4%] md:w-[49%] shadow-md md:my-[1%]">
      <div className="flex flex-col p-[2%]">
        <div className="shadow-sm py-[2%] md:py-[5%] px-[3%]">
          <img src={person} alt={image + "alt"} className="border rounded-full w-[30%]"/>
          <p className="font-bold text-[100%] smd:text-[120%] md:text-[140%] lg:text-[160%] md:my-[2%]">{title}</p>
          <div className="flex items-center text-[#425763]  text-[80%] smd:text-[90%] md:text-[100%]">
            <IoLocation className="mr-[1%]" />
            <div className="">{location}</div>
          </div>
        </div>
        <div className="mt-[3%] flex md:flex-col lg:flex-row items-center justify-between smd:p-[2%]">
          <div className="flex flex-col  text-[80%] smd:text-[90%] md:text-[100%] md:mb-[4%] lg:mb-[0%]">
            <div className="flex flex-row items-center">
              <IoCall className="mr-[2%]" />
              <div className="">{contact}</div>
            </div>
            <div className="text-[#AFAFAF] text-[75%]">Available on Phone</div>
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="text-[70%] md:text-[90%] smd:text-[100%]">Fetch Details</Button>
              </DialogTrigger>
              <DialogContent className="w-[240px] smd:w-[350px] ">
                <DialogHeader>
                  <DialogTitle className="text-[100%] md:text-[120%]">Fetch Details</DialogTitle>
                  <DialogDescription className="text-[80%] md:text-[100%]">
                    Here are the details of the following employee.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col text-[70%] md:text-[100%]">
                  <div>Name: {title} </div>
                  <div>Location: {location}</div>
                  <div>Contact Number: {contact}</div>

                  <div className="my-[1%]">Profile Image:</div>
                  <div>
                    <img src={person} alt={image + "alt"} className="w-[150px] smd:w-[200px]" />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
