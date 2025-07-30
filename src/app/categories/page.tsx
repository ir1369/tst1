'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Search, 
  Filter,
  Code, 
  Palette, 
  TrendingUp, 
  Languages, 
  Camera, 
  Music,
  Calculator,
  Heart,
  Briefcase,
  Cpu,
  PenTool,
  Globe,
  Gamepad2,
  Wrench,
  Users,
  Star,
  ArrowRight,
  Grid3X3,
  List
} from 'lucide-react';

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    {
      id: 1,
      icon: Code,
      title: "برنامه‌نویسی",
      description: "یادگیری زبان‌های برنامه‌نویسی مدرن و توسعه نرم‌افزار",
      courses: 120,
      students: "25,000+",
      level: "همه سطوح",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      subcategories: ["JavaScript", "Python", "React", "Node.js", "Java", "C++"],
      avgRating: 4.8,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      icon: Palette,
      title: "طراحی",
      description: "UI/UX، گرافیک، طراحی وب و هنرهای دیجیتال",
      courses: 85,
      students: "18,500+",
      level: "مبتدی تا پیشرفته",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      subcategories: ["UI/UX", "Figma", "Photoshop", "Illustrator", "طراحی لوگو", "برندینگ"],
      avgRating: 4.7,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "بازاریابی",
      description: "دیجیتال مارکتینگ، فروش و استراتژی‌های تجاری",
      courses: 60,
      students: "12,300+",
      level: "متوسط",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      subcategories: ["SEO", "Google Ads", "شبکه‌های اجتماعی", "تحلیل داده", "فروش", "برندسازی"],
      avgRating: 4.6,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      icon: Languages,
      title: "زبان‌های خارجی",
      description: "یادگیری زبان‌های مختلف با روش‌های نوین",
      courses: 45,
      students: "15,700+",
      level: "همه سطوح",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      subcategories: ["انگلیسی", "آلمانی", "فرانسوی", "اسپانیایی", "چینی", "ژاپنی"],
      avgRating: 4.9,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      icon: Camera,
      title: "عکاسی و فیلم",
      description: "تکنیک‌های عکاسی، فیلمسازی و تدوین",
      courses: 35,
      students: "8,900+",
      level: "مبتدی تا متوسط",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      subcategories: ["عکاسی پرتره", "عکاسی طبیعت", "فیلمسازی", "تدوین", "After Effects", "Premiere"],
      avgRating: 4.5,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      icon: Music,
      title: "موسیقی",
      description: "آموزش ساز، تئوری موسیقی و آهنگسازی",
      courses: 25,
      students: "6,200+",
      level: "همه سطوح",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      subcategories: ["گیتار", "پیانو", "ویولن", "تئوری موسیقی", "آهنگسازی", "میکس و مستر"],
      avgRating: 4.8,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      icon: Calculator,
      title: "ریاضی و علوم",
      description: "ریاضیات، فیزیک، شیمی و علوم پایه",
      courses: 40,
      students: "11,400+",
      level: "همه سطوح",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      subcategories: ["جبر", "هندسه", "فیزیک", "شیمی", "آمار", "حساب دیفرانسیل"],
      avgRating: 4.4,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      icon: Heart,
      title: "سلامت و تناسب اندام",
      description: "ورزش، تغذیه، یوگا و سلامت روان",
      courses: 30,
      students: "9,800+",
      level: "مبتدی",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      subcategories: ["یوگا", "پیلاتس", "تغذیه", "مدیتیشن", "بدنسازی", "سلامت روان"],
      avgRating: 4.7,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      icon: Briefcase,
      title: "کسب و کار",
      description: "مدیریت، کارآفرینی و مهارت‌های حرفه‌ای",
      courses: 55,
      students: "13,600+",
      level: "متوسط تا پیشرفته",
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50",
      textColor: "text-gray-600",
      subcategories: ["مدیریت پروژه", "رهبری", "کارآفرینی", "مالی", "منابع انسانی", "استراتژی"],
      avgRating: 4.6,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      icon: Cpu,
      title: "هوش مصنوعی",
      description: "یادگیری ماشین، هوش مصنوعی و علم داده",
      courses: 28,
      students: "7,500+",
      level: "پیشرفته",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      subcategories: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      avgRating: 4.9,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      icon: PenTool,
      title: "نوشتن و محتوا",
      description: "نویسندگی، کپی‌رایتینگ و تولید محتوا",
      courses: 22,
      students: "5,300+",
      level: "همه سطوح",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      subcategories: ["کپی‌رایتینگ", "بلاگ‌نویسی", "داستان‌نویسی", "محتوای شبکه‌های اجتماعی", "ترجمه", "ویراستاری"],
      avgRating: 4.5,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      icon: Gamepad2,
      title: "بازی‌سازی",
      description: "توسعه بازی، Unity، Unreal Engine",
      courses: 18,
      students: "4,200+",
      level: "متوسط تا پیشرفته",
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-50",
      textColor: "text-violet-600",
      subcategories: ["Unity", "Unreal Engine", "C#", "Game Design", "3D Modeling", "Animation"],
      avgRating: 4.7,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop"
    }
  ];

  const levels = [
    { value: 'all', label: 'همه سطوح' },
    { value: 'beginner', label: 'مبتدی' },
    { value: 'intermediate', label: 'متوسط' },
    { value: 'advanced', label: 'پیشرفته' }
  ];

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLevel = selectedLevel === 'all' || 
                        (selectedLevel === 'beginner' && category.level.includes('مبتدی')) ||
                        (selectedLevel === 'intermediate' && category.level.includes('متوسط')) ||
                        (selectedLevel === 'advanced' && category.level.includes('پیشرفته'));
    
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <BookOpen className="w-8 h-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">آکادمی دانش</span>
            </Link>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                ورود
              </Link>
              <Link href="/signup" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                ثبت‌نام
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">دسته‌بندی دوره‌ها</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            بیش از ۵۰۰ دوره آموزشی در ۱۲ دسته‌بندی مختلف برای یادگیری مهارت‌های جدید
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="جستجو در دسته‌بندی‌ها..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              {/* Level Filter */}
              <div className="flex items-center space-x-2 space-x-reverse">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {levels.map(level => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredCategories.length} دسته‌بندی یافت شد
          </div>
        </div>

        {/* Categories Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredCategories.map((category) => (
            <div key={category.id} className={`group cursor-pointer ${viewMode === 'list' ? 'flex' : ''}`}>
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${viewMode === 'list' ? 'flex w-full' : ''}`}>
                {/* Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'}`}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className={`${viewMode === 'list' ? 'flex justify-between items-start' : ''}`}>
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>

                      {/* Stats */}
                      <div className={`${viewMode === 'list' ? 'flex items-center space-x-6 space-x-reverse' : 'space-y-2'} mb-4`}>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                          <BookOpen className="w-4 h-4" />
                          <span>{category.courses} دوره</span>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                          <Users className="w-4 h-4" />
                          <span>{category.students} دانشجو</span>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{category.avgRating}</span>
                        </div>
                      </div>

                      {/* Level Badge */}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${category.bgColor} ${category.textColor}`}>
                          {category.level}
                        </span>
                      </div>

                      {/* Subcategories */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {category.subcategories.slice(0, viewMode === 'list' ? 6 : 4).map((sub, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {sub}
                            </span>
                          ))}
                          {category.subcategories.length > (viewMode === 'list' ? 6 : 4) && (
                            <span className="text-xs text-gray-500">
                              +{category.subcategories.length - (viewMode === 'list' ? 6 : 4)} بیشتر
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className={viewMode === 'list' ? 'flex-shrink-0 mr-4' : ''}>
                      <Link
                        href={`/category/${category.id}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <span className="ml-2">مشاهده دوره‌ها</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">دسته‌بندی‌ای یافت نشد</h3>
            <p className="text-gray-500 mb-4">لطفاً کلمات کلیدی دیگری را امتحان کنید</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLevel('all');
              }}
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              پاک کردن فیلترها
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">دسته‌بندی مورد نظرتان را پیدا نکردید؟</h2>
          <p className="text-emerald-100 mb-6">
            ما مدام در حال اضافه کردن دوره‌های جدید هستیم. پیشنهادات خود را با ما در میان بگذارید.
          </p>
          <Link
            href="/contact"
            className="bg-white text-emerald-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors inline-block"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </div>
  );
}