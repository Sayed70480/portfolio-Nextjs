import Images from "@/components/Images";
import Section from "@/components/Section";

export default function Portfolio() {
  return (
    <div className="  pt-14 pb-14 m-auto w-100 " id="portfolio">
      <Section whitetxt='Portfolio' orangetext=""/>
      <div className="mt-14 w-4/5 m-auto flex justify-between flex-wrap gap-0">
<Images imgurl="/Images/1.jpg"/> 
<Images imgurl="/Images/2.jpg"/>
<Images imgurl="/Images/3.jpg"/>
<Images imgurl="/Images/4.jpg"/>
<Images imgurl="/Images/5.jpg"/>
<Images imgurl="/Images/6.jpg"/>
<Images imgurl="/Images/7.jpg"/>
<Images imgurl="/Images/8.jpg"/>
      </div>
    </div>
  )
}
