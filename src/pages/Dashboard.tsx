import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Greenhouse {
  id: string;
  name: string;
  status: 'good' | 'warning' | 'critical';
  temperature: number;
  humidity: number;
  growth: number;
  lastUpdate: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState('Александр Иванов');
  const [userInitials] = useState('АИ');

  const greenhouses: Greenhouse[] = [
    {
      id: '01-A',
      name: 'Теплица № 01-A',
      status: 'good',
      temperature: 24.5,
      humidity: 65,
      growth: 87,
      lastUpdate: '2 минуты назад'
    },
    {
      id: '02-B',
      name: 'Теплица № 02-B',
      status: 'warning',
      temperature: 27.2,
      humidity: 58,
      growth: 92,
      lastUpdate: '5 минут назад'
    },
    {
      id: '03-C',
      name: 'Теплица № 03-C',
      status: 'good',
      temperature: 23.8,
      humidity: 68,
      growth: 78,
      lastUpdate: '1 минуту назад'
    },
    {
      id: '04-D',
      name: 'Теплица № 04-D',
      status: 'critical',
      temperature: 29.5,
      humidity: 45,
      growth: 65,
      lastUpdate: 'только что'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'warning':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'critical':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'good':
        return 'Норма';
      case 'warning':
        return 'Внимание';
      case 'critical':
        return 'Критично';
      default:
        return 'Неизвестно';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return 'CheckCircle2';
      case 'warning':
        return 'AlertTriangle';
      case 'critical':
        return 'XCircle';
      default:
        return 'HelpCircle';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto p-6 max-w-7xl">
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Агропрорыв</h1>
              <p className="text-slate-400">Система мониторинга теплиц</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://t.me/alexxand_er" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Icon name="MessageCircle" size={18} className="text-white" />
                <span className="text-sm text-white font-medium">Поддержка</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm text-slate-400">Пользователь</p>
                  <p className="text-lg font-semibold text-white">{userName}</p>
                </div>
                <Avatar className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500">
                  <AvatarFallback className="bg-transparent text-white font-semibold">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Мои теплицы</h2>
              <p className="text-slate-400 mt-1">Всего объектов: {greenhouses.length}</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Plus" size={18} className="mr-2" />
              Добавить теплицу
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {greenhouses.map((greenhouse) => (
            <Card 
              key={greenhouse.id}
              className="bg-slate-800/50 border-slate-700 hover-scale cursor-pointer transition-all hover:border-blue-500/50"
              onClick={() => navigate(`/greenhouse/${greenhouse.id}`)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">{greenhouse.name}</CardTitle>
                    <CardDescription className="text-slate-400">
                      Обновлено: {greenhouse.lastUpdate}
                    </CardDescription>
                  </div>
                  <Badge className={`${getStatusColor(greenhouse.status)} border`}>
                    <Icon name={getStatusIcon(greenhouse.status)} size={14} className="mr-1" />
                    {getStatusText(greenhouse.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-slate-900/50 rounded-lg">
                    <Icon name="Thermometer" size={20} className="text-orange-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{greenhouse.temperature}°C</p>
                    <p className="text-xs text-slate-400 mt-1">Температура</p>
                  </div>
                  
                  <div className="text-center p-3 bg-slate-900/50 rounded-lg">
                    <Icon name="Droplets" size={20} className="text-blue-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{greenhouse.humidity}%</p>
                    <p className="text-xs text-slate-400 mt-1">Влажность</p>
                  </div>
                  
                  <div className="text-center p-3 bg-slate-900/50 rounded-lg">
                    <Icon name="TrendingUp" size={20} className="text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{greenhouse.growth}%</p>
                    <p className="text-xs text-slate-400 mt-1">Рост</p>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/greenhouse/${greenhouse.id}`);
                  }}
                >
                  Открыть панель управления
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Icon name="BarChart3" size={20} className="text-blue-500" />
              Общая статистика
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <p className="text-slate-400 text-sm mb-1">Средняя температура</p>
                <p className="text-3xl font-bold text-white">
                  {(greenhouses.reduce((acc, g) => acc + g.temperature, 0) / greenhouses.length).toFixed(1)}°C
                </p>
              </div>
              
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <p className="text-slate-400 text-sm mb-1">Средняя влажность</p>
                <p className="text-3xl font-bold text-white">
                  {Math.round(greenhouses.reduce((acc, g) => acc + g.humidity, 0) / greenhouses.length)}%
                </p>
              </div>
              
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <p className="text-slate-400 text-sm mb-1">Средний рост</p>
                <p className="text-3xl font-bold text-white">
                  {Math.round(greenhouses.reduce((acc, g) => acc + g.growth, 0) / greenhouses.length)}%
                </p>
              </div>
              
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <p className="text-slate-400 text-sm mb-1">Требуют внимания</p>
                <p className="text-3xl font-bold text-yellow-500">
                  {greenhouses.filter(g => g.status === 'warning' || g.status === 'critical').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
