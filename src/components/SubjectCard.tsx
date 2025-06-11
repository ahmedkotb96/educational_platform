
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, ArrowLeft } from "lucide-react";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  lessons: number;
  students: number;
}

const SubjectCard = ({ title, description, icon: Icon, gradient, lessons, students }: SubjectCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white">
      <div className={`h-2 ${gradient}`}></div>
      <CardHeader className="pb-4 pt-6">
        <div className={`w-14 h-14 rounded-2xl ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-slate-800 mb-2">{title}</CardTitle>
        <CardDescription className="text-slate-600 leading-relaxed text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-slate-500 mb-6 bg-slate-50 rounded-xl p-4">
          <span className="font-medium">{lessons} درس</span>
          <span className="font-medium">{students} طالب</span>
        </div>
        <Button className="w-full bg-gradient-to-r from-edu-blue-500 to-edu-blue-600 hover:from-edu-blue-600 hover:to-edu-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
          ابدأ التعلم
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
