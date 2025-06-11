
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeacherCardProps {
  name: string;
  specialty: string;
  photo: string;
  experience: string;
  rating: number;
  students: number;
}

const TeacherCard = ({ name, specialty, photo, experience, rating, students }: TeacherCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white">
      <CardHeader className="pb-4 pt-6 text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
          <img 
            src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=150&h=150`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardTitle className="text-xl font-bold text-slate-800 mb-2">{name}</CardTitle>
        <Badge variant="secondary" className="bg-edu-blue-50 text-edu-blue-700 hover:bg-edu-blue-100">
          {specialty}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0 text-center">
        <CardDescription className="text-slate-600 mb-4">
          {experience} سنوات خبرة
        </CardDescription>
        <div className="flex items-center justify-between text-sm text-slate-500 bg-slate-50 rounded-xl p-4">
          <div className="text-center">
            <div className="font-bold text-edu-blue-600">{rating}</div>
            <div className="text-xs">تقييم</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-edu-blue-600">{students}</div>
            <div className="text-xs">طالب</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherCard;
