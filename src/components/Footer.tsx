
import { Book, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-edu-blue-500 to-edu-blue-600 rounded-xl">
                <Book className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">منصة التعليم المصرية</h3>
                <p className="text-slate-400 text-sm">للمرحلة الثانوية</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              منصة تعليمية شاملة تهدف إلى تطوير التعليم في مصر وتقديم أفضل المحتوى التعليمي للطلاب.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">المواد الدراسية</h4>
            <ul className="space-y-3">
              {['الكيمياء', 'الفيزياء', 'الأحياء', 'الرياضيات', 'اللغة العربية', 'التاريخ'].map((subject) => (
                <li key={subject}>
                  <a href="#" className="text-slate-300 hover:text-edu-blue-400 transition-colors">{subject}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">روابط مهمة</h4>
            <ul className="space-y-3">
              {['من نحن', 'تواصل معنا', 'الأسئلة الشائعة', 'سياسة الخصوصية', 'الشروط والأحكام', 'المدونة'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-edu-blue-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-5 w-5 text-edu-blue-400" />
                <span>info@egyptedu.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="h-5 w-5 text-edu-blue-400" />
                <span>+20 100 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="h-5 w-5 text-edu-blue-400" />
                <span>القاهرة، مصر</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">&copy; 2024 منصة التعليم المصرية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
