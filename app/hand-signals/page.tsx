'use client';
import { useRouter } from 'next/navigation';

type Signal = {
  name: string;
  description: string;
  gesture: string;
  notes?: string;
};

const signals: Signal[] = [
  {
    name: 'Raise Boom / Lift',
    description: 'Arm extended horizontally to the side, thumb pointing straight up, fingers closed.',
    gesture: '✊👍',
    notes: 'Used to raise the boom or lift a load. Hold until operator acknowledges.',
  },
  {
    name: 'Lower Boom / Lower Load',
    description: 'Arm extended horizontally to the side, thumb pointing straight down, fingers closed.',
    gesture: '✊👎',
    notes: 'Used to lower the boom or set down a load. Move slowly and deliberately.',
  },
  {
    name: 'Extend Stick (Crowd In)',
    description: 'Forearm held vertically in front of body, hand open with palm facing the operator. Slowly move hand toward your own body.',
    gesture: '🤚→🫵',
    notes: 'Directs the operator to extend the stick/arm outward away from the machine (crowding the bucket in toward the work).',
  },
  {
    name: 'Retract Stick (Dump Out)',
    description: 'Forearm held vertically in front of body, hand open with palm facing outward. Push hand away from your body.',
    gesture: '🤚←',
    notes: 'Directs the operator to pull the stick back toward the machine (opening/dumping the bucket).',
  },
  {
    name: 'Open Bucket / Dump',
    description: 'Both hands in front of body, palms facing each other. Move hands apart (spread).',
    gesture: '🤲 →← 🤲',
    notes: 'Signals the operator to curl/dump the bucket, releasing material.',
  },
  {
    name: 'Close Bucket / Curl',
    description: 'Both hands in front of body, palms facing outward. Move hands toward each other (close).',
    gesture: '→🤲🤲←',
    notes: 'Signals the operator to curl the bucket closed into digging position.',
  },
  {
    name: 'Swing / Slew',
    description: 'Arm extended horizontally, index finger pointing in the direction you want the machine to swing.',
    gesture: '☝️ →',
    notes: 'Point in the exact direction of intended swing. Maintain the signal until swing begins. Never stand in the swing radius.',
  },
  {
    name: 'Travel / Propel',
    description: 'Arms extended forward in front of body, both fists clenched. Rotate fists in vertical circles in the direction of travel.',
    gesture: '✊↻ ↻✊',
    notes: 'Left fist rotates for left track; right fist for right track. Rotate both for straight travel. Used for track/crawler machines.',
  },
  {
    name: 'Stop',
    description: 'Arm extended horizontally to the side, palm facing down. Swing arm back and forth horizontally.',
    gesture: '🖐️ ←→',
    notes: 'Standard halt signal. Operator should complete the current safe movement and stop. Not an emergency — use Emergency Stop for immediate halt.',
  },
  {
    name: 'Emergency Stop',
    description: 'Both arms crossed in front of the chest, palms facing inward.',
    gesture: '🙅',
    notes: 'ALL operations must cease IMMEDIATELY. No exceptions. Used when someone is in danger or equipment is about to cause harm. Every operator on site must recognize and respond to this signal.',
  },
  {
    name: 'Dog Everything / Hold',
    description: 'Hands clasped together in front of the body.',
    gesture: '🤝',
    notes: 'Means "stop all operations and hold position." Used when work must pause but not end — for example, while a worker passes through the area.',
  },
  {
    name: 'Move Slowly (Reduce Speed)',
    description: 'Place one hand on the forearm of the other arm that is giving any signal.',
    gesture: '✋ on arm',
    notes: 'Can be combined with any other signal to indicate the operator should perform that movement at a slow, controlled speed.',
  },
];

export default function HandSignalsPage() {
  const router = useRouter();
  return (
    <main className="px-4 py-8 md:py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <button onClick={() => router.back()} className="text-safety hover:text-yellow-500 font-semibold">
            ← Back
          </button>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            SAE J1307 Hand Signals
          </h1>
          <p className="text-slate-600">
            Standard hand signals required by Massachusetts 230 CMR 6.00 for all excavating
            machinery operations. Every operator and signaler must know these signals.
          </p>
        </div>

        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="font-semibold text-red-900">Emergency STOP — Memorize this first</p>
          <p className="text-red-800 text-sm mt-1">
            Cross both arms in front of your chest. ALL equipment must halt immediately. There are
            no exceptions and no delays. This signal overrides any prior direction.
          </p>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900 space-y-1">
          <p className="font-semibold">Key Rules (230 CMR 6.00)</p>
          <ul className="list-disc list-inside space-y-1 text-amber-800">
            <li>Only the <strong>designated signaler</strong> may direct the operator — not any other worker or supervisor.</li>
            <li>The signaler must be <strong>visible to the operator</strong> at all times.</li>
            <li>The signaler must <strong>never stand within the swing radius</strong> of the machine.</li>
            <li>If the operator cannot see the signaler, they must <strong>stop immediately</strong>.</li>
          </ul>
        </div>

        <div className="space-y-4">
          {signals.map((signal, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-lg border-2 ${
                signal.name === 'Emergency Stop'
                  ? 'border-red-400 bg-red-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className={`font-bold text-lg ${signal.name === 'Emergency Stop' ? 'text-red-900' : 'text-slate-900'}`}>
                    {signal.name}
                  </h2>
                  <p className="text-slate-700 mt-1">{signal.description}</p>
                  {signal.notes && (
                    <p className="text-sm text-slate-500 mt-2 italic">{signal.notes}</p>
                  )}
                </div>
                <div className="text-3xl flex-shrink-0 mt-1" aria-hidden="true">
                  {signal.gesture}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 space-y-1">
          <p className="font-semibold text-slate-900">Study Tips for the Exam</p>
          <ul className="list-disc list-inside space-y-1">
            <li>The Emergency Stop (crossed arms) is always the highest-priority signal on the exam.</li>
            <li>Swing signals require pointing in the intended direction — never the opposite.</li>
            <li>Travel signals use rotating fists — one per track for independent control.</li>
            <li>The "Move Slowly" modifier (hand on forearm) can be combined with any signal.</li>
            <li>Only the designated signaler gives direction — trick questions may introduce a supervisor giving contradictory signals.</li>
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={() => router.back()}
            className="button-secondary"
          >
            ← Return to session
          </button>
        </div>
      </div>
    </main>
  );
}
