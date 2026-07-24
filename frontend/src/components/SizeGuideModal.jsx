import { X } from 'lucide-react';

const TABLE = {
  food: {
    label: 'Feeding guide — mix into your pet\'s daily meals',
    head: ['Pet Weight', 'Daily Amount', 'A 250 g pack lasts'],
    rows: [
      ['Up to 7 kg — cats, small dogs', '½ scoop (~5 g)', '~7 weeks'],
      ['7 – 18 kg — medium dogs', '1 scoop (~10 g)', '~3–4 weeks'],
      ['18 – 30 kg — large dogs', '1½ scoops (~15 g)', '~2 weeks'],
      ['30 kg + — giant breeds', '2 scoops (~20 g)', '~10 days'],
    ],
    tip: 'Start with the lower amount and increase gradually over 5–7 days. Always keep fresh water available.',
  },
  bed: {
    label: 'Bed sizing (by pet weight)',
    head: ['Size', 'Bed (cm)', 'Pet Weight', 'Example Breeds'],
    rows: [
      ['S', '50 × 40', 'Up to 7 kg', 'Kitten, Pug, Shih Tzu'],
      ['M', '70 × 55', '7 – 18 kg', 'Beagle, Cocker Spaniel'],
      ['L', '90 × 70', '18 – 30 kg', 'Labrador, Boxer'],
      ['XL', '110 × 85', '30 kg +', 'German Shepherd, Retriever'],
    ],
    tip: 'Measure your pet nose-to-tail while they sleep stretched out, then size up if in between.',
  },
  collar: {
    label: 'Collar & harness sizing (by neck girth)',
    head: ['Size', 'Neck (in)', 'Pet Weight', 'Example'],
    rows: [
      ['S', '8 – 12', 'Up to 7 kg', 'Cats, small dogs'],
      ['M', '12 – 16', '7 – 18 kg', 'Beagle, Cocker'],
      ['L', '16 – 22', '18 – 30 kg', 'Labrador, Boxer'],
      ['XL', '22 – 28', '30 kg +', 'Shepherd, Retriever'],
    ],
    tip: 'Measure your pet\'s neck girth with a soft tape and size up if in between.',
  },
};

/**
 * Picks the right guide from the product's ACTUAL variant sizes (real DB data)
 * and its category, so a food pack never shows a collar chart and vice-versa.
 */
function pickGuide(category = '', sizes = []) {
  const cat = category.toLowerCase();
  const sizeStr = (sizes || []).join(' ');
  const isWeight = /\d\s*(g|kg|ml|l|gm|gram|kilo)\b/i.test(sizeStr);

  if (/bed|mat|house|crate|kennel|cushion/i.test(cat)) return 'bed';
  if (/collar|leash|harness|belt|apparel|coat|jacket|cloth|wear/i.test(cat)) return 'collar';
  if (isWeight || /food|wellness|treat|nutrition|supplement|health|feed|meal|snack|care/i.test(cat)) return 'food';
  return 'collar';
}

export default function SizeGuideModal({ category, sizes = [], onClose }) {
  const key = pickGuide(category, sizes);
  const data = TABLE[key];
  const packs = (sizes || []).filter(Boolean);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="card relative w-full max-w-lg p-6" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-3 top-3 rounded-full p-2 hover:bg-gold/10"><X size={18} /></button>
        <h3 className="font-display text-2xl font-bold">
          {key === 'food' ? 'Pack & Feeding Guide' : 'Pet Size Guide'}
        </h3>
        <p className="mt-1 text-sm text-gray-400">{data.label} — measurements are approximate.</p>

        {/* Real available packs/sizes for THIS product, straight from the DB variants */}
        {packs.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              {key === 'food' ? 'Available packs' : 'Available sizes'}
            </p>
            <div className="mt-1.5 flex flex-wrap gap-2">
              {packs.map((s) => (
                <span key={s} className="rounded-lg border border-gold/30 bg-gold/5 px-3 py-1 text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 text-gold">
                {data.head.map((h) => <th key={h} className="px-3 py-2 text-left font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r, i) => (
                <tr key={i} className="border-b border-black/5 dark:border-white/10">
                  {r.map((c, j) => <td key={j} className={`px-3 py-2 ${j === 0 ? 'font-semibold' : 'text-gray-500 dark:text-gray-300'}`}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-400">Tip: {data.tip}</p>
      </div>
    </div>
  );
}
