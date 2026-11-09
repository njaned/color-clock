import { format } from 'date-fns';

function CurrentTime() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="bg-slate-800/80 border border-slate-700/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl text-center max-w-md w-full">
        <h1 className="text-2xl font-semibold text-sky-400 tracking-wider uppercase mb-4">
          Current Time
        </h1>
        <p className="text-xl font-mono font-bold text-violet-300 bg-slate-950/60 p-4 rounded-xl border border-violet-500/20">
          {format(new Date(), 'PPPpp')}
        </p>
      </div>
    </div>
  );
}

export default CurrentTime;
    