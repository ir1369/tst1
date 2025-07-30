import Link from "next/link"
import { BookOpen, Users, Award, Play, Star, Clock, Globe, Code, Palette, TrendingUp, Languages, Camera, Music, ArrowRight } from "lucide-react"

export default function Home() {
  const featuredCourses = [
    {
      id: 1,
      title: "برنامه‌نویسی React.js",
      instructor: "دکتر احمد محمدی",
      duration: "12 ساعت",
      students: "2,450",
      rating: 4.8,
      price: "1,200,000",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "یادگیری ماشین با Python",
      instructor: "دکتر فاطمه کریمی",
      duration: "18 ساعت",
      students: "1,890",
      rating: 4.9,
      price: "1,800,000",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "طراحی رابط کاربری UI/UX",
      instructor: "استاد مریم احمدی",
      duration: "15 ساعت",
      students: "3,120",
      rating: 4.7,
      price: "1,500,000",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    }
  ]

  const stats = [
    { icon: Users, number: "50,000+", label: "دانشجو" },
    { icon: BookOpen, number: "500+", label: "دوره آموزشی" },
    { icon: Award, number: "200+", label: "مدرس متخصص" },
    { icon: Globe, number: "25+", label: "کشور" }
  ]

  const categories = [
    {
      icon: Code,
      title: "برنامه‌نویسی",
      description: "یادگیری زبان‌های برنامه‌نویسی مدرن",
      courses: "120+ دوره",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "طراحی",
      description: "UI/UX، گرافیک و طراحی وب",
      courses: "85+ دوره",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "بازاریابی",
      description: "دیجیتال مارکتینگ و فروش",
      courses: "60+ دوره",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Languages,
      title: "زبان‌های خارجی",
      description: "یادگیری زبان‌های مختلف",
      courses: "45+ دوره",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Camera,
      title: "عکاسی و فیلم",
      description: "تکنیک‌های عکاسی و فیلمسازی",
      courses: "35+ دوره",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Music,
      title: "موسیقی",
      description: "آموزش ساز و تئوری موسیقی",
      courses: "25+ دوره",
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">آکادمی دانش</span>
            </div>
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#courses" className="text-gray-700 hover:text-emerald-600 transition-colors">دوره‌ها</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">درباره ما</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">تماس</a>
            </nav>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Link
                href="/login"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                ورود
              </Link>
              <Link
                href="/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                ثبت نام
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
            یادگیری آنلاین را تجربه کنید
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            با بهترین اساتید و دوره‌های با کیفیت، مهارت‌های جدید را یاد بگیرید و آینده خود را بسازید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              شروع یادگیری رایگان
            </Link>
            <Link
              href="#courses"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
            >
              مشاهده دوره‌ها
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">دسته‌بندی دوره‌ها</h2>
            <p className="text-xl text-gray-600">در هر زمینه‌ای که علاقه دارید، دوره‌های متنوعی در انتظار شماست</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-600 font-medium">{category.courses}</span>
                    <div className="flex items-center text-emerald-600 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm font-medium ml-2">مشاهده دوره‌ها</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/categories"
              className="inline-block border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
            >
              مشاهده همه دسته‌بندی‌ها
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">دوره‌های محبوب</h2>
            <p className="text-xl text-gray-600">برترین دوره‌های آموزشی با بالاترین امتیاز</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.price} تومان
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{course.students} دانشجو</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                                           <Link
                           href={`/course/${course.id}`}
                           className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                         >
                           <Play className="w-4 h-4" />
                           <span>مشاهده دوره</span>
                         </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/signup"
              className="inline-block bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
            >
              مشاهده همه دوره‌ها
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">چرا آکادمی دانش؟</h2>
            <p className="text-xl text-gray-600">ویژگی‌های منحصر به فرد ما</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <BookOpen className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">دوره‌های با کیفیت</h3>
              <p className="text-gray-600">دوره‌های آموزشی با بالاترین استانداردهای کیفیت و به‌روزرسانی مداوم</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">اساتید متخصص</h3>
              <p className="text-gray-600">بهترین اساتید و متخصصان حوزه‌های مختلف در کنار شما</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Award className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">گواهی معتبر</h3>
              <p className="text-gray-600">دریافت گواهی معتبر پس از اتمام موفقیت‌آمیز دوره‌ها</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">آماده شروع یادگیری هستید؟</h2>
          <p className="text-xl mb-8 opacity-90">
            همین امروز ثبت نام کنید و به هزاران دانشجوی موفق بپیوندید
          </p>
          <Link
            href="/signup"
            className="bg-white text-emerald-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors inline-block"
          >
            شروع رایگان
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-8 h-8 text-emerald-600" />
                <span className="text-2xl font-bold">آکادمی دانش</span>
              </div>
              <p className="text-gray-400">
                بهترین پلتفرم یادگیری آنلاین برای همه
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">دوره‌ها</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">برنامه‌نویسی</a></li>
                <li><a href="#" className="hover:text-white transition-colors">طراحی</a></li>
                <li><a href="#" className="hover:text-white transition-colors">بازاریابی</a></li>
                <li><a href="#" className="hover:text-white transition-colors">زبان‌های خارجی</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">پشتیبانی</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">راهنما</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تماس با ما</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سوالات متداول</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">شبکه‌های اجتماعی</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">اینستاگرام</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تلگرام</a></li>
                <li><a href="#" className="hover:text-white transition-colors">یوتیوب</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; ۱۴۰۳ آکادمی دانش. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 