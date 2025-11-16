import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [lightLevel, setLightLevel] = useState(75);
  const [wateringTime, setWateringTime] = useState('08:00');
  const [wateringDuration, setWateringDuration] = useState(15);
  const [isWateringActive, setIsWateringActive] = useState(false);

  const greenhouseData = {
    temperature: 24.5,
    humidity: 65,
    growth: 87,
    light: 75,
    soil: 72
  };

  const weekData = [
    { day: 'Пн', temp: 23, humidity: 68 },
    { day: 'Вт', temp: 24, humidity: 65 },
    { day: 'Ср', temp: 25, humidity: 63 },
    { day: 'Чт', temp: 24, humidity: 66 },
    { day: 'Пт', temp: 24.5, humidity: 65 },
    { day: 'Сб', temp: 23.5, humidity: 67 },
    { day: 'Вс', temp: 24, humidity: 64 }
  ];

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
                href="https://t.me/alexxand_err" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Icon name="MessageCircle" size={18} className="text-white" />
                <span className="text-sm text-white font-medium">Поддержка</span>
              </a>
              <div className="text-right">
                <p className="text-sm text-slate-400">Теплица</p>
                <p className="text-lg font-semibold text-white">№ 01-A</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Icon name="User" className="text-white" size={24} />
              </div>
            </div>
          </div>
        </header>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-600">
              <Icon name="LayoutDashboard" size={16} className="mr-2" />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="data-[state=active]:bg-blue-600">
              <Icon name="LineChart" size={16} className="mr-2" />
              Мониторинг
            </TabsTrigger>
            <TabsTrigger value="control" className="data-[state=active]:bg-blue-600">
              <Icon name="Settings" size={16} className="mr-2" />
              Управление
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-slate-800/50 border-slate-700 hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
                    <Icon name="Thermometer" size={18} className="text-orange-500" />
                    Температура
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">{greenhouseData.temperature}°C</div>
                  <p className="text-xs text-slate-500 mt-1">Норма: 22-26°C</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
                    <Icon name="Droplets" size={18} className="text-blue-500" />
                    Влажность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">{greenhouseData.humidity}%</div>
                  <Progress value={greenhouseData.humidity} className="mt-2 h-2" />
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
                    <Icon name="TrendingUp" size={18} className="text-green-500" />
                    Рост растений
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">{greenhouseData.growth}%</div>
                  <Progress value={greenhouseData.growth} className="mt-2 h-2 [&>div]:bg-green-500" />
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2">
                    <Icon name="Sun" size={18} className="text-yellow-500" />
                    Освещённость
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">{greenhouseData.light}%</div>
                  <Progress value={greenhouseData.light} className="mt-2 h-2 [&>div]:bg-yellow-500" />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Activity" size={20} className="text-blue-500" />
                    Состояние системы
                  </CardTitle>
                  <CardDescription>Текущие параметры микроклимата</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Влажность почвы</span>
                    <span className="text-white font-semibold">{greenhouseData.soil}%</span>
                  </div>
                  <Progress value={greenhouseData.soil} className="h-2" />
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-slate-400">Вентиляция</span>
                    <span className="text-green-500 font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Активна
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Полив</span>
                    <span className="text-slate-500 font-semibold">Следующий: {wateringTime}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="AlertCircle" size={20} className="text-yellow-500" />
                    Уведомления
                  </CardTitle>
                  <CardDescription>Системные события</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <Icon name="CheckCircle2" size={18} className="text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-white font-medium">Полив завершён</p>
                      <p className="text-xs text-slate-400">Сегодня в 08:15</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <Icon name="Info" size={18} className="text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-white font-medium">Влажность в норме</p>
                      <p className="text-xs text-slate-400">Сегодня в 07:30</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <Icon name="AlertTriangle" size={18} className="text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-white font-medium">Проверьте датчик pH</p>
                      <p className="text-xs text-slate-400">Вчера в 22:45</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6 animate-fade-in">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="BarChart3" size={20} className="text-blue-500" />
                  Температура и влажность за неделю
                </CardTitle>
                <CardDescription>Динамика изменения основных показателей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {weekData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full space-y-1">
                        <div 
                          className="bg-gradient-to-t from-orange-500 to-orange-400 rounded-t transition-all hover:opacity-80"
                          style={{ height: `${(data.temp / 30) * 200}px` }}
                        />
                        <div 
                          className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all hover:opacity-80"
                          style={{ height: `${(data.humidity / 100) * 150}px` }}
                        />
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{data.day}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded" />
                    <span className="text-sm text-slate-400">Температура</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded" />
                    <span className="text-sm text-slate-400">Влажность</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-sm text-slate-400">Средняя температура</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">24.1°C</p>
                  <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
                    <Icon name="TrendingUp" size={12} />
                    +0.3°C за неделю
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-sm text-slate-400">Средняя влажность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">65.4%</p>
                  <p className="text-xs text-blue-500 flex items-center gap-1 mt-1">
                    <Icon name="Minus" size={12} />
                    Стабильно
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-sm text-slate-400">Рост за период</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">+12 см</p>
                  <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
                    <Icon name="TrendingUp" size={12} />
                    Отличный результат
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="control" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Droplet" size={20} className="text-blue-500" />
                    Управление поливом
                  </CardTitle>
                  <CardDescription>Настройка автоматического полива</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="watering-time" className="text-slate-300">Время запуска</Label>
                    <Input
                      id="watering-time"
                      type="time"
                      value={wateringTime}
                      onChange={(e) => setWateringTime(e.target.value)}
                      className="bg-slate-900 border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-slate-300">Длительность (мин)</Label>
                      <span className="text-white font-semibold">{wateringDuration}</span>
                    </div>
                    <Slider
                      value={[wateringDuration]}
                      onValueChange={(value) => setWateringDuration(value[0])}
                      max={60}
                      min={5}
                      step={5}
                      className="[&_[role=slider]]:bg-blue-500"
                    />
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => setIsWateringActive(!isWateringActive)}
                  >
                    <Icon name={isWateringActive ? "Square" : "Play"} size={18} className="mr-2" />
                    {isWateringActive ? 'Остановить полив' : 'Запустить полив'}
                  </Button>

                  {isWateringActive && (
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg animate-fade-in">
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">Полив активен</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Sun" size={20} className="text-yellow-500" />
                    Управление освещением
                  </CardTitle>
                  <CardDescription>Регулировка интенсивности света</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-slate-300">Уровень освещённости</Label>
                      <span className="text-white font-semibold">{lightLevel}%</span>
                    </div>
                    <Slider
                      value={[lightLevel]}
                      onValueChange={(value) => setLightLevel(value[0])}
                      max={100}
                      min={0}
                      step={5}
                      className="[&_[role=slider]]:bg-yellow-500"
                    />
                  </div>

                  <div className="p-4 bg-slate-900 rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Режим</span>
                      <span className="text-sm text-white font-medium">Автоматический</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Период работы</span>
                      <span className="text-sm text-white font-medium">06:00 - 20:00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Энергопотребление</span>
                      <span className="text-sm text-green-500 font-medium">Низкое</span>
                    </div>
                  </div>

                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    <Icon name="Settings" size={18} className="mr-2" />
                    Настроить расписание
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Wind" size={20} className="text-cyan-500" />
                  Дополнительные параметры
                </CardTitle>
                <CardDescription>Контроль микроклимата теплицы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-900 rounded-lg">
                    <Label className="text-slate-400 text-sm">Вентиляция</Label>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-white font-semibold">45%</span>
                      <Icon name="Wind" className="text-cyan-500" size={20} />
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 rounded-lg">
                    <Label className="text-slate-400 text-sm">CO₂</Label>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-white font-semibold">420 ppm</span>
                      <Icon name="Gauge" className="text-green-500" size={20} />
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 rounded-lg">
                    <Label className="text-slate-400 text-sm">pH почвы</Label>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-white font-semibold">6.5</span>
                      <Icon name="Beaker" className="text-purple-500" size={20} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;