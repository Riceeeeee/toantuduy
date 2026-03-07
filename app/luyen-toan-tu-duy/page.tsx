"use client";

import type React from "react";
import { useEffect, useState } from "react";
import {
  type Difficulty,
  type MathProblem,
  type Operation,
  generateMathProblem,
} from "@/lib/mathGenerator";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function PracticePage() {
  const [operation, setOperation] = useState<Operation>("mix");
  const [difficulty, setDifficulty] = useState<Difficulty>("de");
  const [problem, setProblem] = useState<MathProblem>({
    question: "5 + 3 = ?",
    answer: 8,
  });
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState<"correct" | "wrong" | "">("");

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;
    const id = window.setInterval(() => {
      setTimeLeft((prev: number) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [isRunning, timeLeft]);

  function startSession() {
    setScore(0);
    setTotal(0);
    setTimeLeft(60);
    setIsRunning(true);
    setStatus("");
    setProblem(generateMathProblem(operation, difficulty));
    setAnswer("");
  }

  function nextProblem() {
    setProblem(generateMathProblem(operation, difficulty));
    setAnswer("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isRunning || timeLeft <= 0) return;
    const value = Number.parseFloat(answer.replace(",", "."));
    if (Number.isNaN(value)) {
      return;
    }
    setTotal((prev: number) => prev + 1);
    if (Math.abs(value - problem.answer) < 0.0001) {
      setScore((prev: number) => prev + 1);
      setStatus("correct");
    } else {
      setStatus("wrong");
    }
    nextProblem();
  }

  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Luyện toán tư duy</h1>
        <p className="section-subtitle">
          Bé có thể luyện tập cộng, trừ, nhân, chia ngay tại nhà. Mỗi lượt
          luyện kéo dài 60 giây, hệ thống tự động tính điểm để phụ huynh theo
          dõi tiến bộ.
        </p>

        <div className="practice-layout">
          <div className="card">
            <div className="practice-header mb-4">
              <div>
                <div className="section-eyebrow">
                  Công cụ luyện tập trực tuyến
                </div>
                <div className="section-heading">Chọn dạng toán và mức độ</div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={startSession}
              >
                {isRunning ? "Luyện lại" : "Bắt đầu luyện tập"}
              </button>
            </div>

            <div className="practice-grid">
              <div className="practice-controls">
                <div>
                  <div className="field-label">Dạng toán</div>
                  <select
                    className="practice-select"
                    value={operation}
                    onChange={(e) =>
                      setOperation(e.target.value as Operation)
                    }
                    disabled={isRunning}
                  >
                    <option value="mix">Ngẫu nhiên 4 phép tính</option>
                    <option value="add">Cộng</option>
                    <option value="sub">Trừ</option>
                    <option value="mul">Nhân</option>
                    <option value="div">Chia</option>
                  </select>
                </div>
                <div>
                  <div className="field-label">Mức độ</div>
                  <select
                    className="practice-select"
                    value={difficulty}
                    onChange={(e) =>
                      setDifficulty(e.target.value as Difficulty)
                    }
                    disabled={isRunning}
                  >
                    <option value="de">Dễ</option>
                    <option value="trung-binh">Trung bình</option>
                    <option value="kho">Khó</option>
                  </select>
                </div>
                <div>
                  <div className="field-label">Thời gian</div>
                  <div className="practice-badge">
                    {formatTime(timeLeft)} / 01:00
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="practice-question">
                  {problem.question}
                </div>
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="field-label">Câu trả lời của bé</div>
                  <input
                    type="text"
                    className="practice-input"
                    placeholder="Nhập kết quả"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    disabled={!isRunning || timeLeft <= 0}
                  />
                  <div className="practice-status mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!isRunning || timeLeft <= 0}
                    >
                      Trả lời
                    </button>
                    {status === "correct" && (
                      <span className="practice-badge">
                        Chính xác, bé làm rất tốt!
                      </span>
                    )}
                    {status === "wrong" && (
                      <span className="practice-badge">
                        Chưa đúng, hãy thử câu tiếp theo nhé.
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="practice-score-card">
            <div className="section-header">
              <div className="section-eyebrow">Kết quả luyện tập</div>
              <div className="section-heading">Theo dõi tiến bộ của bé</div>
            </div>
            <div className="grid grid-2 mb-4">
              <div>
                <div className="practice-score-number">{score}</div>
                <div className="practice-score-label">
                  Số câu trả lời đúng
                </div>
              </div>
              <div>
                <div className="practice-score-number">{total}</div>
                <div className="practice-score-label">Tổng số câu đã làm</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="field-label">Tỉ lệ chính xác</div>
              <div className="practice-badge">
                {accuracy}% chính xác
              </div>
            </div>
            <div className="info-list">
              <div>
                <div className="info-item-label">Gợi ý dành cho phụ huynh</div>
                <div className="muted">
                  Mỗi ngày chỉ cần 10–15 phút luyện tập đều đặn, bé sẽ dần quen
                  với việc suy nghĩ nhanh, không còn sợ các phép tính dài.
                </div>
              </div>
              <div>
                <div className="info-item-label">Kết hợp với lớp học trực tiếp</div>
                <div className="muted">
                  Công cụ này phù hợp để ôn lại sau mỗi buổi học trên lớp tại
                  trung tâm Toán Tư Duy MMABC, giúp kiến thức được củng cố tốt
                  hơn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
