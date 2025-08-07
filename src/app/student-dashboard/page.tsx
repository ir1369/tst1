'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Calendar,
  MessageCircle,
  Settings,
  Bell,
  Search,
  Video,
  Play,
  Download,
  TrendingUp,
  Clock,
  Award,
  FileText,
  Activity,
  Eye,
  MoreHorizontal,
  CheckCircle,
  Star,
  Target,
  Bookmark,
  User
} from 'lucide-react';

export default function StudentDashboard() {
  const [selectedCourse, setSelectedCourse] = useState('all');

  const stats = [
    {
      title: "دوره‌های فعال",
      value: "8",
      change: "2 دوره جدید این ماه",
      changeType: "positive",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      title: "ساعات یادگیری",
      value: "124",
      change: "+18 ساعت این هفته",
      changeType: "positive",
      icon: Clock,
      color: "bg-emerald-500"
    },
    {
      title: "میانگین نمرات",
      value: "85%",
      change: "+7% از ماه گذشته",
      changeType: "positive",
      icon: TrendingUp,
      color: "bg-purple-500"
    },
    {
      title: "گواهی‌نامه‌ها",
      value: "5",
      change: "2 گواهی جدید",
      changeType: "positive",
      icon: Award,
      color: "bg-orange-500"
    }
  ];

  const upcomingClasses = [
    {
      day: "دوشنبه",
      date: "24",
      title: "برنامه‌نویسی React.js: کامپوننت‌ها",
      time: "9:00 صبح - 10:30 صبح",
      instructor: "دکتر احمد محمدی",
      color: "bg-blue-100 text-blue-600"
    },
    {
      day: "سه‌شنبه", 
      date: "25",
      title: "طراحی UI/UX: اصول طراحی",
      time: "11:00 صبح - 12:30 ظهر",
      instructor: "مهندس فاطمه احمدی",
      color: "bg-green-100 text-green-600"
    },
    {
      day: "چهارشنبه",
      date: "26", 
      title: "بازاریابی دیجیتال: SEO پیشرفته",
      time: "2:00 ظهر - 3:30 ظهر",
      instructor: "استاد مریم احمدی",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const recentActivities = [
    {
      action: "تکلیف ارسال کردید",
      item: "پروژه React.js",
      course: "برنامه‌نویسی React.js",
      time: "30 دقیقه پیش",
      status: "completed",
      icon: CheckCircle
    },
    {
      action: "ویدیو مشاهده کردید",
      item: "اصول طراحی UI",
      course: "طراحی رابط کاربری",
      time: "2 ساعت پیش",
      status: "watched",
      icon: Play
    },
    {
      action: "کوییز شرکت کردید",
      item: "کوییز بازاریابی دیجیتال",
      course: "بازاریابی دیجیتال",
      time: "1 روز پیش",
      status: "quiz",
      icon: Target
    },
    {
      action: "گواهی نامه دریافت کردید",
      item: "گواهی JavaScript پایه",
      course: "JavaScript مدرن",
      time: "3 روز پیش",
      status: "certificate",
      icon: Award
    }
  ];

  const courseProgress = [
    {
      title: "برنامه‌نویسی React.js",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      nextLesson: "State Management",
      color: "bg-blue-500"
    },
    {
      title: "طراحی UI/UX",
      progress: 60,
      totalLessons: 20,
      completedLessons: 12,
      nextLesson: "User Research",
      color: "bg-purple-500"
    },
    {
      title: "بازاریابی دیجیتال",
      progress: 90,
      totalLessons: 16,
      completedLessons: 14,
      nextLesson: "Analytics",
      color: "bg-green-500"
    }
  ];

  const bookmarkedResources = [
    {
      name: "راهنمای React Hooks.pdf",
      course: "برنامه‌نویسی React.js",
      size: "8.2 مگابایت",
      addedTime: "دیروز ذخیره شده",
      type: "pdf"
    },
    {
      name: "چک‌لیست طراحی UI.docx",
      course: "طراحی رابط کاربری", 
      size: "1.5 مگابایت",
      addedTime: "2 روز پیش ذخیره شده",
      type: "doc"
    },
    {
      name: "ویدیو آموزش SEO.mp4",
      course: "بازاریابی دیجیتال",
      size: "125 مگابایت",
      addedTime: "هفته گذشته ذخیره شده", 
      type: "video"
    }
  ];

  const menuItems = [
    { icon: BarChart3, label: "داشبورد", active: true },
    { icon: BookOpen, label: "دوره‌های من" },
    { icon: Calendar, label: "برنامه کلاس‌ها" },
    { icon: Activity, label: "پیشرفت تحصیلی" },
    { icon: Bookmark, label: "منابع ذخیره شده" },
    { icon: Award, label: "گواهی‌نامه‌ها" },
    { icon: MessageCircle, label: "پیام‌ها", badge: "2" },
    { icon: Settings, label: "تنظیمات" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-l">
        {/* Logo */}
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">آکادمی دانش</h2>
              <p className="text-sm text-gray-500">پنل دانشجو</p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
            منوی اصلی
          </div>
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active 
                    ? 'bg-emerald-50 text-emerald-700 border-l-2 border-emerald-500' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="absolute bottom-0 w-64 p-4 border-t">
          <div className="flex items-center space-x-3 space-x-reverse">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
              alt="سارا احمدی"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">سارا احمدی</p>
              <p className="text-xs text-gray-500">دانشجوی فعال</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">داشبورد</h1>
              <p className="text-gray-600">خوش برگشتی، سارا!</p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 left-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Upcoming Classes */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">کلاس‌های آینده</h2>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingClasses.map((class_, index) => (
                    <div key={index} className="flex items-center space-x-4 space-x-reverse">
                      <div className={`w-12 h-12 ${class_.color} rounded-lg flex flex-col items-center justify-center`}>
                        <span className="text-xs font-medium">{class_.day}</span>
                        <span className="text-lg font-bold">{class_.date}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{class_.title}</h3>
                        <p className="text-sm text-gray-500">{class_.time}</p>
                        <p className="text-xs text-gray-400">{class_.instructor}</p>
                      </div>
                      <div className="flex space-x-2 space-x-reverse">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Video className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Calendar className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    مشاهده همه کلاس‌ها
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">فعالیت‌های اخیر</h2>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 space-x-reverse">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.status === 'completed' ? 'bg-green-100' :
                        activity.status === 'watched' ? 'bg-blue-100' :
                        activity.status === 'quiz' ? 'bg-purple-100' :
                        'bg-orange-100'
                      }`}>
                        <activity.icon className={`w-4 h-4 ${
                          activity.status === 'completed' ? 'text-green-600' :
                          activity.status === 'watched' ? 'text-blue-600' :
                          activity.status === 'quiz' ? 'text-purple-600' :
                          'text-orange-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          {activity.action} <span className="text-emerald-600">"{activity.item}"</span>
                        </p>
                        <p className="text-xs text-gray-500">{activity.course} • {activity.time}</p>
                      </div>
                      {index === 0 && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    مشاهده همه فعالیت‌ها
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course Progress */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">پیشرفت دوره‌ها</h2>
                  <select 
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="all">همه دوره‌ها</option>
                    <option value="react">React.js</option>
                    <option value="design">طراحی UI/UX</option>
                    <option value="marketing">بازاریابی دیجیتال</option>
                  </select>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {courseProgress.map((course, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{course.title}</h3>
                        <span className="text-sm text-gray-500">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className={`h-2 rounded-full ${course.color}`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{course.completedLessons}/{course.totalLessons} درس</span>
                        <span>بعدی: {course.nextLesson}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bookmarked Resources */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">منابع ذخیره شده</h2>
                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                    مشاهده همه
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {bookmarkedResources.map((resource, index) => (
                    <div key={index} className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        {resource.type === 'pdf' && <FileText className="w-5 h-5 text-blue-600" />}
                        {resource.type === 'doc' && <FileText className="w-5 h-5 text-green-600" />}
                        {resource.type === 'video' && <Video className="w-5 h-5 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{resource.name}</h3>
                        <p className="text-sm text-gray-500">{resource.course}</p>
                        <p className="text-xs text-gray-400">{resource.size} • {resource.addedTime}</p>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}