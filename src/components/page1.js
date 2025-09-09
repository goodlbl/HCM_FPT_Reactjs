import { useNavigate } from "react-router-dom";

function Part1() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Phần 1</h2>
      <p>Nội dung Phần 1: Quá trình hình thành và phát triển.</p>

      {/* nút ở bên phải */}
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <button onClick={() => navigate("/part2")}>
          Tiếp sang Phần 2 →
        </button>
      </div>
    </div>
  );
}

export default Part1;
