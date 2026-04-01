/**
 * LOGIC CHỌN CÂU HỎI TỪ 3 KHO RIÊNG BIỆT
 * Math Matrix Pro 2026
 *
 * Sử dụng:
 *   pickNLC(topic, level) → NLCQuestion
 *   pickDS(topic, level)  → DSQuestion
 *   pickTLN(topic, level) → TLNQuestion
 *   resetAllUsed()        → xóa lịch sử, dùng khi tạo đề mới
 */

import { NLC_BANK, NLCQuestion } from './bankNLC';
import { DS_BANK, DSQuestion }   from './bankDS';
import { TLN_BANK, TLNQuestion } from './bankTLN';

// ─────────────────────────────────────────────────────
// Re-export types for consumers that imported from here
export type { NLCQuestion, DSQuestion, TLNQuestion };

// ─────────────────────────────────────────────────────
// TRACKING (Set chứa index đã dùng trong phiên tạo đề)
// ─────────────────────────────────────────────────────
const usedNLC = new Set<number>();
const usedDS  = new Set<number>();
const usedTLN = new Set<number>();

/** Xóa toàn bộ tracking — gọi trước khi tạo đề mới */
export function resetAllUsed(): void {
  usedNLC.clear();
  usedDS.clear();
  usedTLN.clear();
}

// ─────────────────────────────────────────────────────
// HELPER
// ─────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Tính điểm tương đồng giữa topic yêu cầu và topic trong kho */
function topicScore(bankTopic: string, requested: string): number {
  const a = bankTopic.toLowerCase();
  const b = requested.toLowerCase();
  if (a === b) return 100;
  if (a.includes(b) || b.includes(a)) return 80;
  // Từ khóa chung
  const wordsA = a.split(/[\s\-–]+/);
  const wordsB = b.split(/[\s\-–]+/);
  const common = wordsA.filter(w => w.length > 3 && wordsB.includes(w)).length;
  return common * 20;
}

/** Chọn câu hỏi từ pool, ưu tiên chưa dùng */
function pickFrom<T>(
  pool: { item: T; idx: number }[],
  used: Set<number>,
  fallback: () => T
): T {
  // Thứ tự: chưa dùng → đã dùng (reset)
  const unused = pool.filter(p => !used.has(p.idx));
  const candidates = shuffle(unused.length > 0 ? unused : pool);
  if (candidates.length === 0) return fallback();
  if (unused.length === 0) used.clear(); // reset khi hết
  const chosen = candidates[0];
  used.add(chosen.idx);
  return chosen.item;
}

// ─────────────────────────────────────────────────────
// CÁC HÀM CHỌN CÂU CÔNG KHAI
// ─────────────────────────────────────────────────────

/**
 * Chọn câu NLC (trắc nghiệm nhiều phương án).
 * Ưu tiên: đúng topic + đúng level → đúng topic bất kỳ level → topic gần nhất → toàn bộ kho
 */
export function pickNLC(topicReq: string, levelReq: string): NLCQuestion {
  // Tính điểm cho từng câu
  const scored = NLC_BANK.map((q, idx) => ({
    item: q,
    idx,
    score: topicScore(q.topic, topicReq) + (q.level === levelReq ? 50 : 0)
  }));

  // Sắp xếp theo điểm giảm dần
  scored.sort((a, b) => b.score - a.score);

  // Lấy nhóm điểm cao nhất (±5 điểm so với max)
  const maxScore = scored[0]?.score ?? 0;
  const topGroup = scored.filter(s => s.score >= maxScore - 5);

  return pickFrom(topGroup, usedNLC, () => ({
    text: `Câu hỏi về ${topicReq} mức ${levelReq}.`,
    options: ['(A)', '(B)', '(C)', '(D)'] as [string,string,string,string],
    answer: 'A' as const,
    topic: topicReq,
    level: levelReq as NLCQuestion['level'],
  }));
}

/**
 * Chọn câu DS (đúng/sai).
 * Ưu tiên: đúng topic + đúng level → topic gần → level bất kỳ → toàn bộ
 */
export function pickDS(topicReq: string, levelReq?: string): DSQuestion {
  const scored = DS_BANK.map((q, idx) => ({
    item: q,
    idx,
    score: topicScore(q.topic, topicReq) + (q.level === levelReq ? 50 : 0)
  }));
  scored.sort((a, b) => b.score - a.score);
  const maxScore = scored[0]?.score ?? 0;
  const topGroup = scored.filter(s => s.score >= maxScore - 5);

  return pickFrom(topGroup, usedDS, () => ({
    topic: topicReq,
    level: (levelReq ?? 'Vận dụng') as DSQuestion['level'],
    context: `Xét các mệnh đề sau liên quan đến ${topicReq}:`,
    statements: [
      { text: 'Mệnh đề 1.', answer: 'Đúng' as const },
      { text: 'Mệnh đề 2.', answer: 'Sai' as const },
      { text: 'Mệnh đề 3.', answer: 'Đúng' as const },
      { text: 'Mệnh đề 4.', answer: 'Sai' as const },
    ],
  }));
}

/**
 * Chọn câu TLN (trả lời ngắn).
 * Ưu tiên: đúng topic + đúng level → topic gần → level bất kỳ → toàn bộ
 */
export function pickTLN(topicReq: string, levelReq: string): TLNQuestion {
  const scored = TLN_BANK.map((q, idx) => ({
    item: q,
    idx,
    score: topicScore(q.topic, topicReq) + (q.level === levelReq ? 50 : 0)
  }));
  scored.sort((a, b) => b.score - a.score);
  const maxScore = scored[0]?.score ?? 0;
  const topGroup = scored.filter(s => s.score >= maxScore - 5);

  return pickFrom(topGroup, usedTLN, () => ({
    text: `Câu hỏi trả lời ngắn về ${topicReq} mức ${levelReq}.`,
    answer: '...',
    topic: topicReq,
    level: levelReq as TLNQuestion['level'],
  }));
}

// ─────────────────────────────────────────────────────
// THỐNG KÊ KHO (tiện cho debug / UI)
// ─────────────────────────────────────────────────────
export function getBankStats() {
  return {
    nlc: NLC_BANK.length,
    ds:  DS_BANK.length,
    tln: TLN_BANK.length,
    total: NLC_BANK.length + DS_BANK.length + TLN_BANK.length,
  };
}
