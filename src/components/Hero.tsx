
import { Button } from "@/components/ui/button";
import { Book, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-bg py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-edu-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-edu-blue-200 shadow-lg">
            <Book className="h-4 w-4" />
            منصة التعليم الأولى في مصر
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            تعلم واستكشف مع
            <span className="gradient-text block mt-2">أفضل المدرسين</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            منصة تعليمية شاملة لطلاب المرحلة الثانوية تحتوي على دروس تفاعلية في الكيمياء والفيزياء والأحياء والرياضيات واللغة العربية
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-gradient-to-r from-edu-blue-500 to-edu-blue-600 hover:from-edu-blue-600 hover:to-edu-blue-700 px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              ابدأ التعلم الآن
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-4 text-lg border-slate-300 hover:bg-slate-50 group">
              <Play className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
              مشاهدة العرض التوضيحي
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 hover-scale">
              <div className="text-4xl font-bold text-edu-blue-600 mb-3">1000+</div>
              <div className="text-slate-600 font-medium">درس تفاعلي</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-100 hover-scale">
              <div className="text-4xl font-bold text-edu-emerald-600 mb-3">50+</div>
              <div className="text-slate-600 font-medium">مدرس متخصص</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100 hover-scale">
              <div className="text-4xl font-bold text-edu-purple-600 mb-3">10000+</div>
              <div className="text-slate-600 font-medium">طالب نشط</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
