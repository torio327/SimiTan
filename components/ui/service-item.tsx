
type Props={
   service: {
       number: string,
       title: string,
       description: string,
   }
}

const ServiceItem = ({ service }:Props) => (
    <div className="bg-slate-100 dark:bg-slate-800 h-full p-6 lg:p-12">
        <div className="w-16 h-16 rounded-full text-3xl inline-flex justify-center items-center mb-6 text-black dark:text-white bg-white shadow-lg dark:bg-slate-900 dark:bg-opacity-80">
            <i className="fab fa-accusoft"></i>
            <h1>{service.number}</h1>
        </div>
        <h4 className="font-semibold text-[22px] text-blue-600 mb-4">
            {service.title}
        </h4>
        <p className="opacity-80">{service.description}</p>
    </div>
);
export default ServiceItem;