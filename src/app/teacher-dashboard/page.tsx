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
  Edit,
  Plus,
  Download,
  TrendingUp,
  Clock,
  Award,
  FileText,
  Activity,
  Eye,
  MoreHorizontal
} from 'lucide-react';

export default function TeacherDashboard() {
  const [selectedCourse, setSelectedCourse] = useState('all');

  const stats = [
    {
      title: "دانشجویان فعال",
      value: "248",
      change: "+12% از ماه گذشته",
      changeType: "positive",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "دوره‌های فعال",
      value: "12",
      change: "3 دوره جدید این ترم",
      changeType: "positive",
      icon: BookOpen,
      color: "bg-emerald-500"
    },
    {
      title: "میانگین مشارکت",
      value: "87%",
      change: "+5% از هفته گذشته",
      changeType: "positive",
      icon: TrendingUp,
      color: "bg-purple-500"
    },
    {
      title: "منابع آموزشی",
      value: "156",
      change: "8 مورد جدید اضافه شده",
      changeType: "positive",
      icon: FileText,
      color: "bg-orange-500"
    }
  ];

  const upcomingClasses = [
    {
      day: "دوشنبه",
      date: "24",
      title: "فیزیک 101: مقدمه‌ای بر مکانیک",
      time: "9:00 صبح - 10:30 صبح",
      room: "کلاس 203",
      color: "bg-blue-100 text-blue-600"
    },
    {
      day: "سه‌شنبه", 
      date: "25",
      title: "شیمی: ترکیبات آلی",
      time: "11:00 صبح - 12:30 ظهر",
      room: "کلاس 105",
      color: "bg-green-100 text-green-600"
    },
    {
      day: "چهارشنبه",
      date: "26", 
      title: "زیست‌شناسی: ساختار و عملکرد سلول",
      time: "2:00 ظهر - 3:30 ظهر",
      room: "کلاس 302",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const recentActivities = [
    {
      user: "امیر احمدی",
      action: "تکلیف ارسال کرد",
      item: "گزارش آزمایش فیزیک",
      time: "10 دقیقه پیش",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      user: "سارا کریمی",
      action: "سوال پرسید در",
      item: "شیمی 102",
      time: "45 دقیقه پیش",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    {
      user: "علی رضایی",
      action: "ویدیو مشاهده کرد",
      item: "مقدمه‌ای بر ژنتیک",
      time: "2 ساعت پیش",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      user: "شما",
      action: "کوییز جدید منتشر کردید",
      item: "کوییز زیست‌شناسی 101",
      time: "3 ساعت پیش",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    }
  ];

  const performanceData = {
    classAverage: "82%",
    highestScore: "98%",
    lowestScore: "65%", 
    participation: "94%"
  };

  const resources = [
    {
      name: "کتاب درسی فیزیک.pdf",
      size: "12.5 مگابایت",
      addedTime: "دیروز اضافه شده",
      type: "pdf"
    },
    {
      name: "نمودار مفاهیم شیمی.xlsx",
      size: "2.1 مگابایت", 
      addedTime: "2 روز پیش اضافه شده",
      type: "excel"
    },
    {
      name: "ویدیو آزمایش زیست.mp4",
      size: "45.8 مگابایت",
      addedTime: "هفته گذشته اضافه شده", 
      type: "video"
    }
  ];

  const menuItems = [
    { icon: BarChart3, label: "داشبورد", active: true },
    { icon: BookOpen, label: "نمای کلی دوره‌ها" },
    { icon: Users, label: "تعامل با دانشجویان", badge: "3" },
    { icon: Activity, label: "معیارهای عملکرد" },
    { icon: FileText, label: "کتابخانه منابع" },
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
              <h2 className="font-bold text-gray-900">پلتفرم نوآورانه</h2>
              <p className="text-sm text-gray-500">پلتفرم مدرس</p>
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
              alt="الکس جانسون"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">الکس جانسون</p>
              <p className="text-xs text-gray-500">مدرس علوم</p>
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
              <p className="text-gray-600">خوش برگشتی، الکس!</p>
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
                        <p className="text-sm text-gray-500">{class_.time} • {class_.room}</p>
                      </div>
                      <div className="flex space-x-2 space-x-reverse">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Video className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Edit className="w-4 h-4" />
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
                      <img
                        src={activity.avatar}
                        alt={activity.user}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                          <span className="text-emerald-600">"{activity.item}"</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
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
            {/* Student Performance */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">عملکرد دانشجویان</h2>
                  <select 
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="all">همه دوره‌ها</option>
                    <option value="physics">فیزیک 101</option>
                    <option value="chemistry">شیمی 102</option>
                    <option value="biology">زیست‌شناسی 201</option>
                  </select>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">میانگین کلاس</p>
                    <p className="text-2xl font-bold text-gray-900">{performanceData.classAverage}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">بالاترین نمره</p>
                    <p className="text-2xl font-bold text-green-600">{performanceData.highestScore}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">پایین‌ترین نمره</p>
                    <p className="text-2xl font-bold text-red-600">{performanceData.lowestScore}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">مشارکت</p>
                    <p className="text-2xl font-bold text-blue-600">{performanceData.participation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource Library */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">کتابخانه منابع</h2>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 space-x-reverse">
                    <Plus className="w-4 h-4" />
                    <span>افزودن جدید</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div key={index} className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        {resource.type === 'pdf' && <FileText className="w-5 h-5 text-blue-600" />}
                        {resource.type === 'excel' && <BarChart3 className="w-5 h-5 text-green-600" />}
                        {resource.type === 'video' && <Video className="w-5 h-5 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{resource.name}</h3>
                        <p className="text-sm text-gray-500">{resource.size} • {resource.addedTime}</p>
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