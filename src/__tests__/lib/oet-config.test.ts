import { describe, it, expect } from "vitest";
import { EXAM_CONFIG } from "@/lib/oet/config";

describe("OET Config", () => {
  it("has correct exam ID", () => {
    expect(EXAM_CONFIG.examId).toBe("EXAM016");
  });

  it("has correct slug", () => {
    expect(EXAM_CONFIG.slug).toBe("oet");
  });

  it("has valid theme colors", () => {
    expect(EXAM_CONFIG.themeColor).toMatch(/^#[0-9A-Fa-f]{6}$/);
    expect(EXAM_CONFIG.themeColorDark).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it("has freemium gate configured", () => {
    expect(EXAM_CONFIG.freemiumGate.dailyQuestions).toBe(10);
  });
});
