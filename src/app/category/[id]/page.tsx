'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  BookOpen, 
  Search, 
  Filter,
  SlidersHorizontal,
  Star,
  Clock,
  Users,
  Play,
  Heart,
  ArrowLeft,
  Grid3X3,
  List,
  TrendingUp,
  Award,
  ChevronDown
} from 'lucide-react';

export default function CategoryCoursesPage() {
  const params = useParams();
  const categoryId = Number(params.id);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Category data
  const categories = {
    1: {
      id: 1,
      title: "برنامه‌نویسی",
      description: "یادگیری زبان‌های برنامه‌نویسی مدرن و توسعه نرم‌افزار",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      totalCourses: 120,
      totalStudents: "25,000+",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop"
    },
    2: {
      id: 2,
      title: "طراحی",
      description: "UI/UX، گرافیک، طراحی وب و هنرهای دیجیتال",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      totalCourses: 85,
      totalStudents: "18,500+",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=400&fit=crop"
    },
    3: {
      id: 3,
      title: "بازاریابی",
      description: "دیجیتال مارکتینگ، فروش و استراتژی‌های تجاری",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      totalCourses: 60,
      totalStudents: "12,300+",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop"
    }
  };

  // Sample courses data for each category
  const allCourses = {
    1: [ // Programming courses
      {
        id: 1,
        title: "برنامه‌نویسی React.js از مبتدی تا پیشرفته",
        instructor: "دکتر احمد محمدی",
        description: "یادگیری کامل React.js با پروژه‌های عملی و مفاهیم پیشرفته",
        price: "2,500,000",
        originalPrice: "4,200,000",
        duration: "200 ساعت",
        students: "12,500",
        rating: 4.8,
        reviews: 1250,
        level: "متوسط تا پیشرفته",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
        tags: ["React", "JavaScript", "Frontend"],
        bestseller: true,
        updated: "2 هفته پیش"
      },
      {
        id: 2,
        title: "Python برای علم داده",
        instructor: "دکتر سارا احمدی",
        description: "یادگیری Python و کتابخانه‌های علم داده",
        price: "1,800,000",
        originalPrice: "3,000,000",
        duration: "150 ساعت",
        students: "8,900",
        rating: 4.7,
        reviews: 890,
        level: "مبتدی تا متوسط",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
        tags: ["Python", "Data Science", "Machine Learning"],
        bestseller: false,
        updated: "1 ماه پیش"
      },
      {
        id: 3,
        title: "توسعه وب با Node.js",
        instructor: "مهندس علی رضایی",
        description: "ساخت API و برنامه‌های وب با Node.js و Express",
        price: "2,200,000",
        originalPrice: "3,500,000",
        duration: "180 ساعت",
        students: "6,700",
        rating: 4.6,
        reviews: 670,
        level: "متوسط",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
        tags: ["Node.js", "Backend", "API"],
        bestseller: false,
        updated: "3 هفته پیش"
      },
      {
        id: 4,
        title: "برنامه‌نویسی موبایل با Flutter",
        instructor: "دکتر مریم کریمی",
        description: "ساخت اپلیکیشن‌های موبایل کراس پلتفرم",
        price: "2,800,000",
        originalPrice: "4,500,000",
        duration: "220 ساعت",
        students: "5,400",
        rating: 4.9,
        reviews: 540,
        level: "متوسط تا پیشرفته",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        tags: ["Flutter", "Mobile", "Dart"],
        bestseller: true,
        updated: "1 هفته پیش"
      },
      {
        id: 5,
        title: "جاوا اسکریپت مدرن ES6+",
        instructor: "استاد حسین محمدی",
        description: "یادگیری ویژگی‌های جدید JavaScript",
        price: "1,500,000",
        originalPrice: "2,500,000",
        duration: "120 ساعت",
        students: "15,200",
        rating: 4.5,
        reviews: 1520,
        level: "مبتدی تا متوسط",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
        tags: ["JavaScript", "ES6", "Frontend"],
        bestseller: false,
        updated: "2 ماه پیش"
      },
      {
        id: 6,
        title: "برنامه‌نویسی Java از صفر",
        instructor: "دکتر فاطمه نوری",
        description: "یادگیری کامل زبان Java و برنامه‌نویسی شی‌گرا",
        price: "2,000,000",
        originalPrice: "3,200,000",
        duration: "160 ساعت",
        students: "9,800",
        rating: 4.4,
        reviews: 980,
        level: "مبتدی",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
        tags: ["Java", "OOP", "Backend"],
        bestseller: false,
        updated: "1 ماه پیش"
      }
    ],
    2: [ // Design courses
      {
        id: 7,
        title: "طراحی رابط کاربری با Figma",
        instructor: "مهندس فاطمه احمدی",
        description: "یادگیری طراحی UI/UX حرفه‌ای با Figma",
        price: "1,800,000",
        originalPrice: "3,000,000",
        duration: "150 ساعت",
        students: "8,200",
        rating: 4.9,
        reviews: 820,
        level: "مبتدی تا متوسط",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        tags: ["Figma", "UI/UX", "Design"],
        bestseller: true,
        updated: "1 هفته پیش"
      },
      {
        id: 8,
        title: "گرافیک دیزاین با Adobe Photoshop",
        instructor: "استاد علی حسینی",
        description: "تسلط بر Photoshop برای طراحی گرافیک",
        price: "1,600,000",
        originalPrice: "2,800,000",
        duration: "130 ساعت",
        students: "11,500",
        rating: 4.6,
        reviews: 1150,
        level: "مبتدی",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
        tags: ["Photoshop", "Graphic Design", "Adobe"],
        bestseller: false,
        updated: "2 هفته پیش"
      },
      {
        id: 9,
        title: "طراحی لوگو و هویت بصری",
        instructor: "دکتر مریم رضایی",
        description: "ساخت لوگو و برند حرفه‌ای",
        price: "2,100,000",
        originalPrice: "3,400,000",
        duration: "140 ساعت",
        students: "6,300",
        rating: 4.8,
        reviews: 630,
        level: "متوسط",
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=250&fit=crop",
        tags: ["Logo Design", "Branding", "Identity"],
        bestseller: true,
        updated: "3 هفته پیش"
      }
    ],
    3: [ // Marketing courses
      {
        id: 10,
        title: "دیجیتال مارکتینگ جامع",
        instructor: "استاد احمد کریمی",
        description: "یادگیری کامل بازاریابی دیجیتال",
        price: "2,300,000",
        originalPrice: "3,800,000",
        duration: "170 ساعت",
        students: "7,800",
        rating: 4.7,
        reviews: 780,
        level: "متوسط",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        tags: ["Digital Marketing", "SEO", "Social Media"],
        bestseller: true,
        updated: "1 هفته پیش"
      },
      {
        id: 11,
        title: "تبلیغات گوگل و Google Ads",
        instructor: "دکتر سارا محمدی",
        description: "مدیریت کمپین‌های تبلیغاتی گوگل",
        price: "1,900,000",
        originalPrice: "3,100,000",
        duration: "120 ساعت",
        students: "5,600",
        rating: 4.5,
        reviews: 560,
        level: "متوسط تا پیشرفته",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
        tags: ["Google Ads", "PPC", "Advertising"],
        bestseller: false,
        updated: "2 هفته پیش"
      }
    ]
  };

  const category = categories[categoryId as keyof typeof categories];
  const courses = allCourses[categoryId as keyof typeof allCourses] || [];

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">دسته‌بندی یافت نشد</h1>
          <Link href="/categories" className="text-emerald-600 hover:text-emerald-700">
            بازگشت به دسته‌بندی‌ها
          </Link>
        </div>
      </div>
    );
  }

  // Filter and sort logic
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLevel = selectedLevel === 'all' || 
                        (selectedLevel === 'beginner' && course.level.includes('مبتدی')) ||
                        (selectedLevel === 'intermediate' && course.level.includes('متوسط')) ||
                        (selectedLevel === 'advanced' && course.level.includes('پیشرفته'));
    
    const price = parseInt(course.price.replace(/,/g, ''));
    const matchesPrice = selectedPrice === 'all' ||
                        (selectedPrice === 'free' && price === 0) ||
                        (selectedPrice === 'under2m' && price < 2000000) ||
                        (selectedPrice === '2m-3m' && price >= 2000000 && price <= 3000000) ||
                        (selectedPrice === 'over3m' && price > 3000000);
    
    const matchesRating = selectedRating === 'all' ||
                         (selectedRating === '4+' && course.rating >= 4) ||
                         (selectedRating === '4.5+' && course.rating >= 4.5);
    
    return matchesSearch && matchesLevel && matchesPrice && matchesRating;
  });

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return parseInt(b.students.replace(/,/g, '')) - parseInt(a.students.replace(/,/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, ''));
      case 'newest':
        return a.updated.localeCompare(b.updated);
      default:
        return 0;
    }
  });

  const levels = [
    { value: 'all', label: 'همه سطوح' },
    { value: 'beginner', label: 'مبتدی' },
    { value: 'intermediate', label: 'متوسط' },
    { value: 'advanced', label: 'پیشرفته' }
  ];

  const priceRanges = [
    { value: 'all', label: 'همه قیمت‌ها' },
    { value: 'free', label: 'رایگان' },
    { value: 'under2m', label: 'زیر 2 میلیون' },
    { value: '2m-3m', label: '2 تا 3 میلیون' },
    { value: 'over3m', label: 'بالای 3 میلیون' }
  ];

  const ratings = [
    { value: 'all', label: 'همه امتیازها' },
    { value: '4+', label: '4+ ستاره' },
    { value: '4.5+', label: '4.5+ ستاره' }
  ];

  const sortOptions = [
    { value: 'popular', label: 'محبوب‌ترین' },
    { value: 'rating', label: 'بالاترین امتیاز' },
    { value: 'price-low', label: 'ارزان‌ترین' },
    { value: 'price-high', label: 'گران‌ترین' },
    { value: 'newest', label: 'جدیدترین' }
  ];

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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">خانه</Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-gray-900">دسته‌بندی‌ها</Link>
            <span>/</span>
            <span className="text-gray-900">{category.title}</span>
          </div>
        </div>
      </div>

      {/* Category Hero */}
      <div className={`bg-gradient-to-r ${category.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
              <p className="text-xl opacity-90 mb-6">{category.description}</p>
              <div className="flex items-center space-x-6 space-x-reverse">
                <div className="text-center">
                  <div className="text-2xl font-bold">{category.totalCourses}</div>
                  <div className="text-sm opacity-80">دوره</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{category.totalStudents}</div>
                  <div className="text-sm opacity-80">دانشجو</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="جستجو در دوره‌ها..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              {/* Sort */}
              <div className="flex items-center space-x-2 space-x-reverse">
                <TrendingUp className="w-5 h-5 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg border transition-colors ${
                  showFilters ? 'bg-emerald-50 border-emerald-300 text-emerald-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>فیلترها</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

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

          {/* Expanded Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">سطح دوره</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {levels.map(level => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">محدوده قیمت</label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">امتیاز</label>
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {ratings.map(rating => (
                    <option key={rating.value} value={rating.value}>{rating.label}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            {sortedCourses.length} دوره یافت شد
          </div>
        </div>

        {/* Courses Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {sortedCourses.map((course) => (
            <div key={course.id} className={`group cursor-pointer ${viewMode === 'list' ? 'flex' : ''}`}>
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${viewMode === 'list' ? 'flex w-full' : ''}`}>
                {/* Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-64 flex-shrink-0' : 'h-48'}`}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex items-center space-x-2 space-x-reverse">
                    {course.bestseller && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        پرفروش
                      </span>
                    )}
                    <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.price} تومان
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className={`${viewMode === 'list' ? 'flex justify-between items-start' : ''}`}>
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{course.instructor}</p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className={`${viewMode === 'list' ? 'flex items-center space-x-6 space-x-reverse' : 'space-y-2'} mb-4`}>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                          <Users className="w-4 h-4" />
                          <span>{course.students} دانشجو</span>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{course.rating} ({course.reviews})</span>
                        </div>
                      </div>

                      {/* Level Badge */}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${category.bgColor} ${category.textColor}`}>
                          {course.level}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className={viewMode === 'list' ? 'flex-shrink-0 mr-4' : ''}>
                      <Link
                        href={`/course/${course.id}`}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                      >
                        <Play className="w-4 h-4" />
                        <span>مشاهده دوره</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">دوره‌ای یافت نشد</h3>
            <p className="text-gray-500 mb-4">لطفاً کلمات کلیدی دیگری را امتحان کنید یا فیلترها را تغییر دهید</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLevel('all');
                setSelectedPrice('all');
                setSelectedRating('all');
              }}
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              پاک کردن فیلترها
            </button>
          </div>
        )}

        {/* Back to Categories */}
        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            بازگشت به دسته‌بندی‌ها
          </Link>
        </div>
      </div>
    </div>
  );
}