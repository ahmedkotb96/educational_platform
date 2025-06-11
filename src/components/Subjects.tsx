
import SubjectCard from "./SubjectCard";
import { BookOpen, Atom, Calculator, Dna, FileText, Globe } from "lucide-react";

const subjects = [
  {
    title: "الكيمياء",
    description: "تعلم أساسيات الكيمياء من التفاعلات الكيميائية إلى الجدول الدوري والروابط الكيميائية مع تجارب عملية شيقة",
    icon: Atom,
    gradient: "bg-gradient-to-br from-edu-blue-500 to-edu-blue-600",
    lessons: 45,
    students: 2340
  },
  {
    title: "الفيزياء",
    description: "اكتشف قوانين الطبيعة من الميكانيكا والكهرباء إلى البصريات والفيزياء الحديثة بطريقة ممتعة ومبسطة",
    icon: Calculator,
    gradient: "bg-gradient-to-br from-edu-purple-500 to-edu-purple-600",
    lessons: 38,
    students: 1890
  },
  {
    title: "الأحياء",
    description: "استكشف عالم الكائنات الحية من الخلية إلى النظم البيئية والوراثة مع صور ورسوم توضيحية مذهلة",
    icon: Dna,
    gradient: "bg-gradient-to-br from-edu-emerald-500 to-edu-emerald-600",
    lessons: 42,
    students: 2120
  },
  {
    title: "الرياضيات",
    description: "تعلم الجبر والهندسة والتفاضل والتكامل وحل المسائل الرياضية المعقدة بخطوات واضحة ومنطقية",
    icon: Calculator,
    gradient: "bg-gradient-to-br from-edu-orange-500 to-edu-orange-600",
    lessons: 52,
    students: 2680
  },
  {
    title: "اللغة العربية",
    description: "أتقن قواعد النحو والصرف والبلاغة وتحليل النصوص الأدبية والشعرية مع أساليب تعليمية حديثة",
    icon: FileText,
    gradient: "bg-gradient-to-br from-edu-teal-500 to-edu-teal-600",
    lessons: 35,
    students: 1950
  },
  {
    title: "التاريخ",
    description: "اكتشف تاريخ مصر والعالم من الحضارات القديمة إلى العصر الحديث بقصص مشوقة وخرائط تفاعلية",
    icon: Globe,
    gradient: "bg-gradient-to-br from-edu-rose-500 to-edu-rose-600",
    lessons: 28,
    students: 1430
  }
];

const Subjects = () => {
  return (
    <section id="courses" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/80 backdrop-blur-sm text-edu-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-edu-blue-200">
            المواد الدراسية
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            اختر مادتك المفضلة
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ابدأ رحلتك التعليمية مع أفضل المدرسين وأحدث الطرق التعليمية التفاعلية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {subjects.map((subject, index) => (
            <div key={subject.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <SubjectCard {...subject} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
