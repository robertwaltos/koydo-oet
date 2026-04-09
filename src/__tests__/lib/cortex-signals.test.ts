import { describe, it, expect, vi } from "vitest";
import { emitPrismSignal, trackQuestionAttempt } from "@/lib/oet/cortex-signals";

describe("Cortex Signals", () => {
  it("dispatches a custom event on window", () => {
    const spy = vi.fn();
    window.addEventListener("koydo:prism-signal", spy);

    emitPrismSignal({
      event: "test",
      examId: "EXAM016",
    });

    expect(spy).toHaveBeenCalledTimes(1);
    window.removeEventListener("koydo:prism-signal", spy);
  });

  it("enriches signal with timestamp", () => {
    let detail: Record<string, unknown> = {};
    const handler = (e: Event) => {
      detail = (e as CustomEvent).detail;
    };
    window.addEventListener("koydo:prism-signal", handler);

    emitPrismSignal({ event: "test", examId: "EXAM016" });

    expect(detail).toHaveProperty("timestamp");
    window.removeEventListener("koydo:prism-signal", handler);
  });

  it("tracks question attempts", () => {
    const spy = vi.fn();
    window.addEventListener("koydo:prism-signal", spy);

    trackQuestionAttempt("EXAM016", "q1", true, 5000);

    expect(spy).toHaveBeenCalledTimes(1);
    const detail = (spy.mock.calls[0][0] as CustomEvent).detail;
    expect(detail.event).toBe("question_attempt");
    expect(detail.payload.correct).toBe(true);
    window.removeEventListener("koydo:prism-signal", spy);
  });
});
