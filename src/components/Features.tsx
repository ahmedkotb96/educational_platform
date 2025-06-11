
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, Users, Clock, Award, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "دروس تفاعلية",
    description: "دروس مصورة عالية الجودة مع شرح مبسط وأمثلة تطبيقية ومحتوى تفاعلي",
    color: "from-edu-blue-500 to-edu-blue-600"
  },
  {
    icon: Users,
    title: "مدرسين متخصصين",
    description: "نخبة من أفضل المدرسين في مصر مع خبرة واسعة في التدريس والمناهج",
    color: "from-edu-emerald-500 to-edu-emerald-600"
  },
  {
    icon: CheckCircle,
    title: "تمارين وامتحانات",
    description: "مجموعة شاملة من التمارين والامتحانات لتقييم مستواك مع تصحيح فوري",
    color: "from-edu-purple-500 to-edu-purple-600"
  },
  {
    icon: Clock,
    title: "تعلم في أي وقت",
    description: "ادرس متى شئت وأينما كنت مع منصة متاحة على مدار الساعة",
    color: "from-edu-orange-500 to-edu-orange-600"
  },
  {
    icon: Award,
    title: "شهادات معتمدة",
    description: "احصل على شهادات معتمدة عند إتمام المناهج وتحقيق الدرجات المطلوبة",
    color: "from-edu-rose-500 to-edu-rose-600"
  },
  {
    icon: HeadphonesIcon,
    title: "دعم فني متميز",
    description: "فريق دعم فني متاح لمساعدتك في أي وقت لحل المشاكل التقنية",
    color: "from-edu-teal-500 to-edu-teal-600"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-slate-100 text-slate-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            لماذا تختارنا؟
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            مميزات منصتنا التعليمية
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            نقدم تجربة تعليمية متميزة تساعدك على تحقيق أهدافك الأكاديمية بأفضل الطرق الحديثة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden">
              <CardHeader className="pb-4 pt-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 text-center">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-slate-600 leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
