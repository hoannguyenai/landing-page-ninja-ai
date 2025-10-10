import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Play, RotateCcw, Lightbulb } from 'lucide-react';
import { toast } from 'sonner';

interface Position {
  x: number;
  y: number;
}

interface GameState {
  rocketPos: Position;
  rocketDirection: number;
  targetPos: Position;
  gameWon: boolean;
  isRunning: boolean;
}

const GRID_SIZE = 6;
const DIRECTIONS = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 }
];

const CodingGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    rocketPos: { x: 0, y: 5 },
    rocketDirection: 0,
    targetPos: { x: 5, y: 0 },
    gameWon: false,
    isRunning: false
  });

  const [code, setCode] = useState(`// Hướng dẫn rocket đến ngôi sao!
// Sử dụng các lệnh sau:
// move() - di chuyển về phía trước
// turnRight() - xoay phải
// turnLeft() - xoay trái
// repeat(n, [lệnh1, lệnh2]) - lặp lại n lần

move();
turnRight();
move();`);

  const [executionLog, setExecutionLog] = useState<string[]>([]);

  const resetGame = useCallback(() => {
    setGameState({
      rocketPos: { x: 0, y: 5 },
      rocketDirection: 0,
      targetPos: { x: 5, y: 0 },
      gameWon: false,
      isRunning: false
    });
    setExecutionLog([]);
  }, []);

  const isValidPosition = (pos: Position) => {
    return pos.x >= 0 && pos.x < GRID_SIZE && pos.y >= 0 && pos.y < GRID_SIZE;
  };

  const executeCommands = useCallback(async () => {
    if (gameState.isRunning) return;

    setGameState(prev => ({ ...prev, isRunning: true }));
    setExecutionLog([]);

    const currentState = {
      rocketPos: { x: 0, y: 5 },
      rocketDirection: 0
    };

    const log: string[] = [];

    const move = async () => {
      const direction = DIRECTIONS[currentState.rocketDirection];
      const newPos = {
        x: currentState.rocketPos.x + direction.x,
        y: currentState.rocketPos.y + direction.y
      };

      if (isValidPosition(newPos)) {
        currentState.rocketPos = newPos;
        log.push(`🚀 Rocket di chuyển đến (${newPos.x}, ${newPos.y})`);
        
        setGameState(prev => ({
          ...prev,
          rocketPos: { ...currentState.rocketPos }
        }));
        
        await new Promise(resolve => setTimeout(resolve, 400));
        
        return true;
      } else {
        log.push(`❌ Không thể di chuyển ra ngoài lưới!`);
        return false;
      }
    };

    const turnRight = async () => {
      currentState.rocketDirection = (currentState.rocketDirection + 1) % 4;
      log.push(`🔄 Rocket xoay phải`);
      
      setGameState(prev => ({
        ...prev,
        rocketDirection: currentState.rocketDirection
      }));
      
      await new Promise(resolve => setTimeout(resolve, 300));
    };

    const turnLeft = async () => {
      currentState.rocketDirection = (currentState.rocketDirection + 3) % 4;
      log.push(`🔄 Rocket xoay trái`);
      
      setGameState(prev => ({
        ...prev,
        rocketDirection: currentState.rocketDirection
      }));
      
      await new Promise(resolve => setTimeout(resolve, 300));
    };

    const repeat = async (times: number, commands: (() => Promise<boolean | void> | boolean | void)[]) => {
      for (let i = 0; i < times; i++) {
        for (const command of commands) {
          const result = await command();
          if (result === false) return false;
        }
      }
      return true;
    };

    try {
      const lines = code.split('\n').filter(line => 
        line.trim() && !line.trim().startsWith('//')
      );

      for (const line of lines) {
        const trimmedLine = line.trim();
        
        if (trimmedLine === 'move();') {
          if (!(await move())) break;
        } else if (trimmedLine === 'turnRight();') {
          await turnRight();
        } else if (trimmedLine === 'turnLeft();') {
          await turnLeft();
        } else if (trimmedLine.startsWith('repeat(')) {
          const match = trimmedLine.match(/repeat\((\d+),\s*\[(.*?)\]\);/);
          if (match) {
            const times = parseInt(match[1]);
            const commandsStr = match[2];
            const commands = commandsStr.split(',').map(cmd => cmd.trim().replace(/['"]/g, ''));
            
            const commandFunctions: (() => Promise<boolean | void> | boolean | void)[] = [];
            for (const cmd of commands) {
              if (cmd === 'move()') commandFunctions.push(move);
              else if (cmd === 'turnRight()') commandFunctions.push(turnRight);
              else if (cmd === 'turnLeft()') commandFunctions.push(turnLeft);
            }
            
            if (!(await repeat(times, commandFunctions))) break;
          }
        }
      }

      setExecutionLog(log);

      if (currentState.rocketPos.x === gameState.targetPos.x && 
          currentState.rocketPos.y === gameState.targetPos.y) {
        setGameState(prev => ({ ...prev, gameWon: true }));
        toast.success("🎉 Chúc mừng! Rocket đã đến được ngôi sao!");
      } else {
        toast.info("Thử lại! Rocket chưa đến được ngôi sao.");
      }

    } catch (error) {
      toast.error("Có lỗi trong code của bạn. Hãy kiểm tra lại!");
      log.push(`❌ Lỗi: ${error}`);
      setExecutionLog(log);
    }

    setGameState(prev => ({ ...prev, isRunning: false }));
  }, [code, gameState.targetPos, gameState.isRunning]);

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="shadow-large bg-blue-50 border-0 sm:border">
        <CardHeader className="text-center px-3 sm:px-6 py-4 sm:py-6">
          <CardTitle className="text-lg sm:text-2xl flex flex-col sm:flex-row items-center justify-center gap-2">
            🚀 Thử thách lập trình 
            <Badge variant="secondary" className="text-xs sm:text-sm">Tương tác</Badge>
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm mt-2">
            Hướng dẫn rocket đến ngôi sao bằng code! Học loops, điều kiện và biến một cách vui nhộn.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-3 sm:px-6 py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Game Board */}
            <div className="space-y-3 sm:space-y-4 order-2 lg:order-1">
              <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                <Lightbulb className="text-primary flex-shrink-0" size={18} />
                <span className="truncate">Bảng game</span>
              </h3>
              
              {/* Grid - Responsive size */}
              <div className="grid grid-cols-6 gap-0.5 sm:gap-1 p-2 sm:p-4 bg-slate-100 dark:bg-slate-800 rounded-lg w-full overflow-hidden">
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                  const x = index % GRID_SIZE;
                  const y = Math.floor(index / GRID_SIZE);
                  
                  const isRocket = gameState.rocketPos.x === x && gameState.rocketPos.y === y;
                  const isTarget = gameState.targetPos.x === x && gameState.targetPos.y === y;
                  
                  return (
                    <div
                      key={index}
                      className={`aspect-square flex flex-col items-center justify-center rounded border transition-all duration-500 ${
                        isRocket 
                          ? 'bg-blue-200 dark:bg-blue-800 border-blue-400 scale-105 sm:scale-110 shadow-lg border-2' 
                          : isTarget 
                          ? 'bg-yellow-200 dark:bg-yellow-800 border-yellow-400 border-2' 
                          : 'bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 border'
                      }`}
                    >
                      {isRocket && (
                        <span 
                          className={`transition-transform duration-300 w-full flex items-center justify-center ${
                            gameState.isRunning ? 'animate-pulse scale-110' : ''
                          }`}
                          style={{
                            transform: `rotate(${gameState.rocketDirection * 90}deg)`,
                            fontSize: 'clamp(1.25rem, 5vw, 2rem)'
                          }}
                        >
                          🚀
                        </span>
                      )}
                      {isTarget && (
                        <span 
                          className="animate-pulse w-full flex items-center justify-center"
                          style={{ fontSize: 'clamp(1rem, 4vw, 1.75rem)' }}
                        >
                          ⭐
                        </span>
                      )}
                      {!isRocket && !isTarget && (
                        <span 
                          className="text-slate-400 font-medium text-center"
                          style={{ fontSize: 'clamp(0.5rem, 2.5vw, 0.75rem)' }}
                        >
                          {x},{y}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {gameState.gameWon && (
                <div className="text-center p-3 sm:p-4 bg-green-100 dark:bg-green-900 rounded-lg animate-bounce">
                  <div className="text-xl sm:text-2xl">🎉 Thành công!</div>
                  <p className="text-sm sm:text-base text-green-700 dark:text-green-300">
                    Rocket đã đến được ngôi sao!
                  </p>
                </div>
              )}
            </div>

            {/* Code Editor */}
            <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
              <h3 className="text-base sm:text-lg font-semibold">💻 Viết code của bạn</h3>
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Nhập code của bạn ở đây..."
                className="min-h-[180px] sm:min-h-[200px] font-mono text-xs sm:text-sm"
                disabled={gameState.isRunning}
              />
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={executeCommands}
                  disabled={gameState.isRunning}
                  className="flex-1 text-sm sm:text-base"
                  variant="default"
                >
                  <Play size={16} className="mr-2" />
                  {gameState.isRunning ? 'Đang chạy...' : 'Chạy Code'}
                </Button>
                <Button 
                  onClick={resetGame} 
                  variant="outline"
                  className="text-sm sm:text-base"
                >
                  <RotateCcw size={16} className="mr-2" />
                  Reset
                </Button>
              </div>

              {executionLog.length > 0 && (
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 space-y-1 max-h-32 sm:max-h-40 overflow-y-auto">
                  <h4 className="font-semibold text-xs sm:text-sm">📋 Nhật ký thực thi:</h4>
                  {executionLog.map((log, index) => (
                    <div key={index} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 break-words">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <h4 className="font-semibold text-sm sm:text-base mb-2">💡 Gợi ý:</h4>
            <ul className="text-xs sm:text-sm space-y-1 text-blue-700 dark:text-blue-300">
              <li>• Sử dụng <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded text-xs">move()</code> để di chuyển về phía trước</li>
              <li>• Sử dụng <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded text-xs">turnRight()</code> và <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded text-xs">turnLeft()</code> để xoay</li>
              <li>• Thử <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded text-xs">repeat(3, ["move()"])</code> để lặp lại lệnh</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodingGame;