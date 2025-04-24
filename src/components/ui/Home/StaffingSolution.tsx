
const solutions = [
  {
    title: "IT Staffing",
    image: "https://www.nlbservices.com/wp-content/uploads/2022/09/Our-service_500x400-01-1024x819.jpg",
    points: ["Contract Talent", "Permanent Placement"],
  },
  {
    title: "Business Process Staffing",
    image: "https://www.nlbservices.com/wp-content/uploads/2022/09/Our-service_500x400-03-1024x820.jpg",
    points: ["Full-Time", "Part-Time", "Per diem", "Contract"],
  },
  {
    title: "Healthcare Staffing",
    image: "https://www.nlbservices.com/wp-content/uploads/2022/09/Our-service_500x400-02-1024x819.jpg",
    points: ["Full-Time", "Part-Time", "Per diem", "Contract"],
  },
  {
    title: "RPO Services",
    image: "https://www.nlbservices.com/wp-content/uploads/2022/09/Our-service_500x400-04-1024x819.jpg",
    points: ["Enterprise RPO", "Project RPO", "ROD"],
  },
  {
    title: "Talent Community",
    image: "https://www.nlbservices.com/wp-content/uploads/2022/09/Our-service_500x400-05-1024x819.jpg",
    points: ["Vetted Talent Repository", "Candidate Assessment"],
  },
  {
    title: "Learning & Upskilling",
    image: "https://www.nlbservices.com/wp-content/uploads/2022/09/Our-service_500x400-06-1024x820.jpg",
    points: ["Hire Train & Deploy Solutions", "Digitized training"],
  },
];

export default function StaffingSolutions() {
  return (
    <div className="w-full bg-primary-900 text-white">
        <div className="py-16 px-4 w-10/12 mx-auto">
      <h2 className="text-3xl font-bold text-center  mb-12">Our Staffing Solutions</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {solutions.map((item, index) => (
          <div key={index} className="flex flex-col items-start space-y-4">
            <img              
              src={item.image}
              alt={item.title}
              className="rounded-md object-cover w-[300px] h-[180px]"
            />
            <h3 className="text-lg font-semibold ">{item.title}</h3>
            <ul className="space-y-1 text-sm">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1 h-4 bg-green-500 mt-0.5"></span>
                  <span className="">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
