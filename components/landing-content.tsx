import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Chat",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description: "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description: "The best in class, definitely worth the premium subscription!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white mx-auto p-6 rounded-lg shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-x-2">
                <div className="bg-sky-400 w-12 h-12 flex items-center justify-center text-white text-2xl font-bold rounded-full">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4 px-0 text-sm">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
