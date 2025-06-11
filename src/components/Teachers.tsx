
import TeacherCard from "./TeacherCard";

const teachers = [
  {
    name: "د. أحمد محمد",
    specialty: "الكيمياء",
    photo: "photo-1507003211169-0a1dd7228f2d",
    experience: "15",
    rating: 4.9,
    students: 1250
  },
  {
    name: "د. فاطمة علي",
    specialty: "الفيزياء",
    photo: "photo-1494790108755-2616c6d6b8f2",
    experience: "12",
    rating: 4.8,
    students: 980
  },
  {
    name: "د. محمود حسن",
    specialty: "الأحياء",
    photo: "photo-1472099645785-5658abf4ff4e",
    experience: "18",
    rating: 4.9,
    students: 1420
  },
  {
    name: "د. سارة أحمد",
    specialty: "الرياضيات",
    photo: "photo-1438761681033-6461ffad8d80",
    experience: "10",
    rating: 4.7,
    students: 1100
  },
  {
    name: "د. عمر خالد",
    specialty: "اللغة العربية",
    photo: "photo-1500648767791-00dcc994a43e",
    experience: "20",
    rating: 4.8,
    students: 850
  },
  {
    name: "د. نور الدين",
    specialty: "التاريخ",
    photo: "photo-1507591064344-4c6ce005b128",
    experience: "14",
    rating: 4.6,
    students: 720
  }
];

const Teachers = () => {
  return (
    <section id="teachers" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/80 backdrop-blur-sm text-edu-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-edu-blue-200">
            فريق التدريس
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            أفضل المدرسين
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            تعلم مع نخبة من أفضل المدرسين المتخصصين في المرحلة الثانوية بخبرات واسعة ومهارات تدريسية متميزة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {teachers.map((teacher, index) => (
            <div key={teacher.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <TeacherCard {...teacher} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
