// Small local progress store. Data stays in this browser; no account or server is required.
(() => {
  const KEY = 'chesscraft-progress-v1';
  const empty = {completedLessons:[], puzzlesSolved:0, puzzleAttempts:0, puzzleCorrect:0, streak:0, lastPractice:null, theme:'light', achievements:[]};
  function read(){try{return {...empty,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return {...empty}}}
  function write(data){localStorage.setItem(KEY,JSON.stringify(data));}
  window.ChessProgress = {
    get: read,
    update(fn){const data=read();fn(data);write(data);return data;},
    completeLesson(id){return this.update(d=>{if(!d.completedLessons.includes(id))d.completedLessons.push(id);});},
    recordPuzzle(correct){return this.update(d=>{d.puzzleAttempts++;if(correct){d.puzzlesSolved++;d.puzzleCorrect++;}const today=new Date().toDateString();if(d.lastPractice!==today){const yesterday=new Date(Date.now()-86400000).toDateString();d.streak=d.lastPractice===yesterday?d.streak+1:1;d.lastPractice=today;}const earned=[];if(d.puzzlesSolved>=1)earned.push('First puzzle');if(d.puzzlesSolved>=10)earned.push('10 puzzles');if(d.puzzlesSolved>=25)earned.push('25 puzzles');if(d.completedLessons.length>=1)earned.push('First lesson');d.achievements=[...new Set([...d.achievements,...earned])];});},
    setTheme(theme){this.update(d=>d.theme=theme);},
    accuracy(){const d=read();return d.puzzleAttempts?Math.round(d.puzzleCorrect/d.puzzleAttempts*100)+'%':'—';}
  };
})();