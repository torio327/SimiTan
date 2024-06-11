import ServiceItem from "@/components/ui/service-item";

const services = [
    {
        number: "1",
        title: "CourseとUnitを決める",
        description:
            "Courseは、初級英単語、中級英単語、上級英単語があります。それぞれのCourseにUnitがあります。",
    },
    {
        number: "2",
        title: "問題に解答する",
        description:
            "()の中の単語の同義語を3つの選択肢の中から選ぶ問題です。",
    },
    {
        number: "3",
        title: "間違えた単語を復習する",
        description:
            "問題に答え終わると、間違えた単語が表示されます。自分の弱点なのでしっかりと復習しましょう。（全問正解の場合は表示されません）",
    },
    {
        number: "4",
        title: "それぞれのUnitのゲージをMaxにする",
        description:
            "問題に正解するとゲージがたまります。全てのUnitのゲージがMaxになるまで学習しましょう。",
    },
];

 const Service19 = () => {
     return (
         <section className="ezy__service19 py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
             <div className="container px-4">
                 <div className="grid grid-cols-12 md:mb-12">
                     <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
                         <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
                             学習方法
                         </h2>
                     </div>
                 </div>
                 <div className="grid grid-cols-12 gap-6 text-center max-w-7xl mx-auto pt-6">
                     {services.map((service, i) => (
                         <div className="col-span-12 md:col-span-4" key={i}>
                             <ServiceItem service={service}/>
                         </div>
                     ))}
                 </div>
             </div>
         </section>
     );
};
 export default Service19;