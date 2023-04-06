import ky from "ky";
import "./App.css";

const tg = window.Telegram.WebApp;
// const data = await ky
//   .get("http://0.0.0.0:15400/user/?telegram_id=123456")
//   .json();
function App() {
  return (
    <>
      <section className="credentials">
        <div className="firstName">{tg.initDataUnsafe?.user?.first_name}</div>
        <div className="username">@{tg.initDataUnsafe?.user?.username}</div>
      </section>
    </>
  );
}

export default App;
