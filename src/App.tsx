import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Sun, Moon } from 'lucide-react';
import { wildMagicEffects } from './data/wildMagicEffects';
import { useTheme } from 'next-themes';
import './App.css';

function App() {
  const [effect, setEffect] = useState('');
  const { theme, setTheme } = useTheme();

  const triggerWildMagic = () => {
    const randomEffect = wildMagicEffects[Math.floor(Math.random() * wildMagicEffects.length)];
    setEffect(randomEffect);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 transition-colors duration-300">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-md text-gray-900 dark:text-gray-100 border-none shadow-2xl">
        <CardHeader className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-violet-700 dark:text-violet-300">D&D Wild Magic Surge</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-300"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6 p-4 sm:p-6">
          <Button
            onClick={() => {
              triggerWildMagic();
            }}
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
          >
            <Wand2 className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            Trigger Wild Magic
          </Button>
          {effect && (
            <Card className="w-full bg-gray-100/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 p-4 rounded-lg shadow-inner border border-violet-500/30">
              <p className="text-base sm:text-lg md:text-xl text-center">{effect}</p>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;