
import { Button } from "@/components/ui/button";
import { Book, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-edu-blue-500 to-edu-blue-600 rounded-xl shadow-lg">
              <Book className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">منصة التعليم المصرية</h1>
              <p className="text-sm text-slate-600">للمرحلة الثانوية</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#teachers" className="text-slate-700 hover:text-edu-blue-600 transition-colors font-medium">فريق التدريس</a>
            <a href="#about" className="text-slate-700 hover:text-edu-blue-600 transition-colors font-medium">من نحن</a>
            <a href="#contact" className="text-slate-700 hover:text-edu-blue-600 transition-colors font-medium">تواصل معنا</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-edu-blue-200 text-edu-blue-700 hover:bg-edu-blue-50">
              تسجيل الدخول
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-edu-blue-500 to-edu-blue-600 hover:from-edu-blue-600 hover:to-edu-blue-700 shadow-lg">
              إنشاء حساب
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
