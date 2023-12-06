import Card from "@/components/Card";
import Section from "@/components/Section";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
export default function Services() {
  return (
    <div className="pt-14 pb-14" id="services">
      <Section whitetxt="My" orangetext="Services" />
      <div className=" w-4/5 m-auto mt-14 flex flex-row gap-7 max-sm:flex-col ">
        <Card
          Icons={<FaLaptopCode />}
          txt="Web Development"
          para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        />
        <Card
          Icons={<FaMobileAlt />}
          txt="Apps Development"
          para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        />
        <Card
          Icons={<VscGraph />}
          txt="Digital Marketing"
          para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        />
      </div>
    </div>
  );
}
